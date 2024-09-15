/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from '@/src/components/Header'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Highlight } from '@/src/components/Highlight'
import { Button } from '@/src/components/Button'
import { ButtonIcon } from '@/src/components/ButtonIcon'
import { Input } from '@/src/components/Input'
import { Filter } from '@/src/components/Filter'
import { useCallback, useState } from 'react'
import { Alert, FlatList, Keyboard } from 'react-native'
import { PlayerCard } from '@/src/components/PlayerCard'
import { ListEmpty } from '@/src/components/ListEmpty'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { addPlayerByGroup } from '@/src/storage/players/addPlayerByGroup'
import { AppError } from '@/src/_errors/appErrors'
import type { PlayerStorageDTO } from '@/src/storage/players/PlayerStorageDTO'
import { fetchPlayersByGroup } from '@/src/storage/players/fetchPlayersByGroup'
import { deleteGroup } from '@/src/storage/group/deleteGroup'

interface RouteParams {
  group: string
}
export function Players() {
  const [teams, setTeams] = useState('time a')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [player, setPlayer] = useState('')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const route = useRoute()
  const { group } = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  async function AddPlayer() {
    try {
      const newPlayer: PlayerStorageDTO = {
        name: player,
        team: teams,
      }

      await addPlayerByGroup(newPlayer, group)

      setPlayer('')

      Keyboard.dismiss()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Player', error.message)
      }
    }
  }

  async function getPlayers() {
    const result = await fetchPlayersByGroup(group, teams)
    setPlayers(result)
  }

  async function handleDelete() {
    await deleteGroup(group)
    handleGoBack()
  }

  useFocusEffect(
    useCallback(() => {
      getPlayers()
    }, [players, teams]),
  )

  return (
    <Container>
      <Header showBackButton handleClick={handleGoBack} />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={(text) => setPlayer(text)}
          value={player}
          onSubmitEditing={AddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={() => AddPlayer()} />
      </Form>

      <HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              isActive={item === teams}
              title={item}
              onPress={() => setTeams(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        type="SECONDARY"
        title="Remover turma"
        onPress={() => handleDelete()}
      />
    </Container>
  )
}
