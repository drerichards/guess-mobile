import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Theme from '../constants/Theme'
import Card from '../components/Card'
import Input from '../components/Input'

const StartScreen = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const inputHandler = inputVal => {
    //removes any non-num value from input
    setEnteredValue(inputVal.replace(/[^0-9]/g, ''))
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.screenTitle}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number:</Text>
          <Input
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            style={styles.input}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonDiv}>
              <Button title="Reset" color={Theme.error} onPress={() => { }} />
            </View>
            <View style={styles.buttonDiv}>
              <Button title="Confirm" color={Theme.secondary} onPress={() => { }} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  screenTitle: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  buttonDiv: {
    width: 100
  }
})

export default StartScreen
