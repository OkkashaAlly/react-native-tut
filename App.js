import { StyleSheet, View } from "react-native";
import Box from "./components/Box";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightgreen", alignSelf: "flex-start" }}>
        Box 1
      </Box>
      <Box style={{ backgroundColor: "lightblue", alignSelf: "flex-end" }}>Box 2</Box>
      <Box style={{ backgroundColor: "pink", alignSelf: "center" }}>Box 3</Box>
      <Box style={{ backgroundColor: "plum", alignSelf: "stretch"}}>Box 4</Box>
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
    flexDirection: "column", // "row" | "column" | "row-reverse" | "column-reverse"
    justifyContent: "flex-start", // "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems: "flex-end", // "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
  },
});
