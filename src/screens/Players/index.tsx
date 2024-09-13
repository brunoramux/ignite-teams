import { Header } from '@/src/components/Header'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Highlight } from '@/src/components/Highlight'
import { Button } from '@/src/components/Button'
import { ButtonIcon } from '@/src/components/ButtonIcon'
import { Input } from '@/src/components/Input'
import { Filter } from '@/src/components/Filter'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { PlayerCard } from '@/src/components/PlayerCard'
import { ListEmpty } from '@/src/components/ListEmpty'

export function Players() {
  const [teams, setTeams] = useState('time a')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [players, setPlayers] = useState<string[]>([
    'Bruno',
    'Thamires',
    'Gabriel',
    'Antonio',
    'Caio',
  ])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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

      <Button type="SECONDARY" title="Remover turma" />
    </Container>
  )
}
