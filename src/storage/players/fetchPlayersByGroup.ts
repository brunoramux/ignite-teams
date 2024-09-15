import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '../storageConfig'
import type { PlayerStorageDTO } from './PlayerStorageDTO'

export async function fetchPlayersByGroup(group: string, team: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players.filter((player) => player.team === team)
  } catch (error) {
    throw error
  }
}

export async function fetchAllPlayersByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players
  } catch (error) {
    throw error
  }
}
