import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles/index'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  /* filtro: realizamos o filtro antes da renderização,
  e chamamos a função para renderizar seu resultado */
  let tarefasFiltradas = itens
  const filtraTarefas = () => {
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementoTermo =
      termo != undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontradas como: todas ${complementoTermo}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontradas com ${criterio}: ${valor}
      ${complementoTermo}`
    }

    return mensagem
  }
  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      {/* <p>
        {tarefas.length} Tarefas marcadas como: &quot;{criterio}:{valor}&ldquo;
        {termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''}
      </p> */}
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            {/* A key sempre vem no primeiro componente */}
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default TaskList
