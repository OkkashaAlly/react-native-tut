import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Box = ({ children, style }) => {
  return (
    <View style={[styles.text, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "plum",
    padding: 20,
    height: 50,
    width: 50,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default Box;
