import styled from 'styled-components'

export const Section = styled.section`
background-color: #6C6A6B;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height: calc(100vh - 8.5rem);

  img {
    padding: 0.5rem;
    width: 1000px;
      animation: float 2s ease-in-out infinite;
  }

  @keyframes float{
    0%,100%{
        transform: translate(0);

    }
    50%{
        transform: translate(-50px);
    }
}
`
