import type { TouchableOpacityProps } from 'react-native'
import { Container, Icon, type ButtonIconTypeStyleProps } from './styles'
import type { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({
  type = 'PRIMARY',
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon type={type} name={icon} />
    </Container>
  )
}
