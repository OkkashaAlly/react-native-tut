import { StyleSheet, View } from "react-native";
import Box from "./components/Box";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightgreen", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightblue", flex: 1 }}>Box 2</Box>
      <Box style={{ backgroundColor: "pink", flex: 3 }}>Box 3</Box>
      <Box style={{ backgroundColor: "plum" }}>Box 4</Box>
      <Box style={{ backgroundColor: "skyblue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "violet" }}>Box 6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderColor: "red",
    borderWidth: 2,
    flex: 1,
  },
});
