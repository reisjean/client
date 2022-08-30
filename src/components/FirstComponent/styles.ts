import styled from 'styled-components'

interface Props {
  cPosition?: string
  bg?: string
}

export const Wrapper = styled.main<Props>`
  /* background-color: var(--bgDefault); */
  background-color: ${(props) => props.bg};
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img<Props>`
  width: 25rem;
  margin-bottom: 2rem;
  align-self: ${(props) => {
    if (props.cPosition === 'center' || !props.cPosition) {
      return 'center'
    } else if (props.cPosition === 'left') {
      return 'flex-start'
    } else {
      return 'flex-end'
    }
  }};
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary);
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--secondary);
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
