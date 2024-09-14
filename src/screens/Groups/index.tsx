import { View, StyleSheet, Text, FlatList } from 'react-native'
import * as S from './styles'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { GroupCard } from '@/src/components/GroupCard'
import { useState } from 'react'
import { ListEmpty } from '@/src/components/ListEmpty'
import { Button } from '@/src/components/Button'
import { useNavigation } from '@react-navigation/native'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={() => handleNewGroup()} />
    </S.Container>
  )
}
