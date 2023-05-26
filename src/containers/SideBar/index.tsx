import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'
import CardFilter from '../../components/CardFilter'
import { Botao, Input } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Input
              value={termo}
              type="text"
              placeholder="buscar"
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filters>
              <CardFilter
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <CardFilter
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <CardFilter
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <CardFilter
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <CardFilter
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <CardFilter criterio="todas" legenda="todas" />
            </S.Filters>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar à lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
