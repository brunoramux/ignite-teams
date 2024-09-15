import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '../storageConfig'
import { fetchGroups } from './fetchGroups'

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await fetchGroups()
    const storage = JSON.stringify([...storedGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
