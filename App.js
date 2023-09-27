import { StyleSheet, Text, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidBoxShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    padding: 60,
  },
  box: {
    height: 250,
    width: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  androidBoxShadow: {
    elevation: 20,
  },
});
