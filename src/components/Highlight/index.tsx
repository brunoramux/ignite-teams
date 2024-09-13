import { Container, Subtitle, Title } from './styles'

interface highlightProps {
  title: string
  subtitle: string
}

export function Highlight({ subtitle, title }: highlightProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
