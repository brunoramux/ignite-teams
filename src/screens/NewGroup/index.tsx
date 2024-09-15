import { Header } from '@/src/components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@/src/components/Highlight'
import { Button } from '@/src/components/Button'
import { Input } from '@/src/components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@/src/storage/group/groupCreate'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleCreateNewGroup() {
    await groupCreate(group)
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton handleClick={handleGoBack} />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateNewGroup}
        />
      </Content>
    </Container>
  )
}
