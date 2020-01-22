import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    shadowOpacity: .16,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: '#000',
    shadowRadius: 3,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10
  },
})

export default Card
