import { Header } from '@/src/components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@/src/components/Highlight'
import { Button } from '@/src/components/Button'
import { Input } from '@/src/components/Input'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      <Header showBackButton handleClick={handleNewGroup} />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
