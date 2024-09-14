import { BackButton, BackIcon, Container, Logo } from './styles'
import logo from '@/src/assets/logo.png'

type HeaderProps = {
  showBackButton?: boolean
  handleClick: () => void
}

export function Header({ showBackButton = false, handleClick }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <>
          <BackButton onPress={() => handleClick()}>
            <BackIcon />
          </BackButton>
        </>
      )}
      <Logo source={logo} />
    </Container>
  )
}
