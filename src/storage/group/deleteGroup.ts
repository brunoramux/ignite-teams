import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchGroups } from './fetchGroups'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storageConfig'

export async function deleteGroup(groupToDelete: string) {
  try {
    const storedGroups = await fetchGroups()
    const groups = storedGroups.filter((group) => group !== groupToDelete)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToDelete}`)
  } catch (error) {
    throw error
  }
}
