import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  grid-auto-rows: auto; 
  gap: 1.5rem; 
  justify-content: center; 
  align-items: start; 

  @media (min-width: 600px) {
    grid-auto-flow: column; 
    grid-template-rows: repeat(2, auto);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`
