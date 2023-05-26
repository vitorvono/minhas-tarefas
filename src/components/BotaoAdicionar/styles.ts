import styled from 'styled-components'

import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`
