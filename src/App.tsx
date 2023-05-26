import { Provider } from 'react-redux'
/* Imports from react-router */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/*
  createBrowserRouter: onde organizamos as rotas;
  RouterProvider: elemento que disponibiliza as rotas.
*/

import EstiloGlobal, { Container } from './styles'

import Home from './pages/Home'

import { store } from './store'
import Cadastro from './pages/Cadastro'

/* Criação das rotas */
const rotas = createBrowserRouter([
  // função que recebe um array de objetos?
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        {/* Router provider precisa das rotas */}
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
