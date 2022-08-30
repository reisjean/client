import * as S from './styles'

interface MainProps {
  title?: string
  description?: string
  cPosition?: 'center' | 'left' | 'right'
  backgroundColor?: string
}

const FirstComponent = ({
  title = 'XPTO text',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
  cPosition = 'center',
  backgroundColor = 'var(--bgDefault)'
}: MainProps) => (
  <S.Wrapper bg={backgroundColor}>
    <S.Logo
      cPosition={cPosition}
      src="/img/logo.png"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default FirstComponent
