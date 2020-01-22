import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Start A New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select A Number:</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
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
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15
  }
})

export default StartScreen
