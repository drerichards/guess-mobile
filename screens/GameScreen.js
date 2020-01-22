import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Theme from "../constants/Theme";
import NumberContainer from "../components/NumberContainer"
import CustomButton from "../components/CustomButton"
import Card from "../components/Card"

const genRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return genRandomNumber(min, max, exclude)
  } else return rndNum
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(genRandomNumber(1, 100, props.userChoice))

  const nextGuess = direction => {

  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer value={currentGuess} />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Lower"
          color={Theme.accent}
          function={nextGuess.bind(this, 'lower')}
        />
        <CustomButton
          title="Higher"
          color={Theme.secondary}
          function={nextGuess.bind(this, 'higher')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 15
  },
})

export default GameScreen
