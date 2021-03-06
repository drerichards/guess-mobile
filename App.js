import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartScreen onStartGame={startGame} />

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
