import { StyleSheet, Text, View, Dimensions } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome DImension</Text>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    padding: 20,
    height: height > 500 ? "60%": '90%',
    width: width > 500 ? "70%": '90%',
  },
  text: {
    fontWeight: "bold",
    fontSize: width > 500 ? 50 : 24,
    textAlign: "center",
  },
});
