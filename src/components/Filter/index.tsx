import type { TouchableOpacityProps } from 'react-native'
import { Container, Title, type FilterStyleProps } from './styles'

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive = true, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
