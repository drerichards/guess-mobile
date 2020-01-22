import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Theme from '../constants/Theme'
import Card from './Card'
import CustomButton from './CustomButton'

const NumberContainer = props => {
  return (
    <Card style={styles.card}>
      <Text style={styles.text}>You Selected:</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.number}>{props.selectedValue}</Text>
      </View>
      <CustomButton
        style={styles.button}
        title="Start Game"
        color={Theme.secondary}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20
  },
  summaryContainer: {
    borderWidth: 2,
    borderColor: Theme.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  },
  number: {
    color: Theme.accent,
    fontSize: 22,
    fontWeight: '600'
  },
  button: {
    width: 120
  }
})

export default NumberContainer
