import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Theme from '../constants/Theme'
import Card from '../components/Card'

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Start A New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A Number:</Text>
        <TextInput />
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
  },
  buttonDiv: {
    width: 100
  }
})

export default StartScreen
