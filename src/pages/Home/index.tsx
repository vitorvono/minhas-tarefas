import BotaoAdicionar from '../../components/BotaoAdicionar'
import SideBar from '../../containers/SideBar'
import TaskList from '../../containers/TaskList'

const Home = () => {
  return (
    <>
      <SideBar mostrarFiltros />
      <TaskList />
      <BotaoAdicionar />
    </>
  )
}

export default Home
