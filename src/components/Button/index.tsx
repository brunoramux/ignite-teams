import type { TouchableOpacityProps } from 'react-native'
import { Container, Title, type ButtonTypeStyleProps } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...props }: ButtonProps) {
  return (
    <Container type={type} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
