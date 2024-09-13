import { ThemeProvider } from 'styled-components'
import { Groups } from '@/src/screens/Groups'
import theme from '@/src/theme'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@/src/components/Loading'
import { StatusBar } from 'react-native'
import { NewGroup } from '@/src/screens/NewGroup'
import { Players } from '@/src/screens/Players'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
