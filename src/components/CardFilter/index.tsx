import { useDispatch, useSelector } from 'react-redux'

import { alterarFiltro } from '../../store/reducers/filtro'

import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'
import { RootReducer } from '../../store'
import { isIterationStatement } from 'typescript'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const CardFilter = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  /* Função para ver se card esta ativo */
  const verificaEstaAtiva = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    return mesmoCriterio && mesmoValor
  }
  const ativo = verificaEstaAtiva()

  /* Contador */
  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }
  const contador = contarTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default CardFilter
