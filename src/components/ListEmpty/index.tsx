import { Container, Message } from './styles'

interface ListEmpryProps {
  message: string
}

export function ListEmpty({ message }: ListEmpryProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
