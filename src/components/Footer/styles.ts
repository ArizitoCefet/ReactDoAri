import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SFooter = styled.footer`
  /* Rodapé */
  background-color: ${colors.secondary};
  height: 3.5rem;

  h4{
    display:flex;
    align-items: center;
    padding-left: 1rem;
    padding-top: 0.5rem;
    font-size: 2rem;
  }
`
