import { Circulo } from './styles'

const BotaoAdicionar = () => {
  return <Circulo to="/novo">+</Circulo>
}
/* No react-router-dom, não podemos usar um <a> para
fazer as transições entre páginas. O plugin fornece um
componente chaamdo link*/

export default BotaoAdicionar
