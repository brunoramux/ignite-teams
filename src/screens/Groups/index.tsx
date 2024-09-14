import { View, StyleSheet, Text, FlatList } from 'react-native'
import * as S from './styles'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { GroupCard } from '@/src/components/GroupCard'
import { useState } from 'react'
import { ListEmpty } from '@/src/components/ListEmpty'
import { Button } from '@/src/components/Button'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootParamList = {
  groups: undefined
  new: undefined
  players: {
    group: string
  }
}

interface Props {
  navigation: NativeStackNavigationProp<RootParamList, 'groups'>
}

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState<string[]>([])

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <S.Container>
      <Header handleClick={() => {}} />
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
