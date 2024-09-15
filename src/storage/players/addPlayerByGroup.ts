import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@/src/_errors/appErrors'
import { PLAYER_COLLECTION } from '../storageConfig'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { fetchAllPlayersByGroup } from './fetchPlayersByGroup'

export async function addPlayerByGroup(
  { name, team }: PlayerStorageDTO,
  group: string,
) {
  try {
    const players = await fetchAllPlayersByGroup(group)

    const playerAlreadyExists = players.filter((player) => player.name === name)

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Jogador já cadastrado para esse grupo')
    }

    const storage = JSON.stringify([...players, { name, team }])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
