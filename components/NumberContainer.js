import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Theme from '../constants/Theme'
import Card from './Card'
import CustomButton from './CustomButton'

const NumberContainer = props => {
  return (
    <Card style={styles.card}>
      {props.text
        ? <Text style={styles.text}>{props.text}</Text>
        : null}
      <View style={styles.summaryContainer}>
        <Text style={styles.number}>{props.value}</Text>
      </View>
      {props.buttonTitle
        ? <CustomButton
          style={styles.button}
          title={props.buttonTitle}
          color={Theme.secondary}
          function={props.function}
        />
        : null}
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
