import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const CustomButton = props => {
  return (
    <View style={{...styles.buttonDiv, ...props.style}}>
      <Button
        title={props.title}
        color={props.color}
        onPress={props.function ? props.function : (() => { })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonDiv: {
    width: 100
  }
})

export default CustomButton
