import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, title}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'lightblue' : 'lightgray',
        },
        styles.wrapperCustom,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
})