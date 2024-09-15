import { Header } from '@/src/components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@/src/components/Highlight'
import { Button } from '@/src/components/Button'
import { Input } from '@/src/components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@/src/storage/group/createGroup'
import { AppError } from '@/src/_errors/appErrors'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleCreateNewGroup() {
    try {
      if (group.trim().length <= 3) {
        Alert.alert('Nome do grupo inválido')
        return
      }
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Erro não esperado.')
      }
    }
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
