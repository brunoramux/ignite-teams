import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '../storageConfig'
import { fetchGroups } from './fetchGroups'
import { AppError } from '@/src/_errors/appErrors'

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await fetchGroups()
    const groupAlreadyExists = storedGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError('Grupo com o mesmo nome já cadastrado.')
    }
    const storage = JSON.stringify([...storedGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
