import { StyleSheet, View } from "react-native";
import Box from "./components/Box";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "lightgreen" }}>Box 1</Box>
      <Box style={{ backgroundColor: "lightblue", flexBasis: 140, flex: 1 }}>
        Box 2
      </Box>
      <Box style={{ backgroundColor: "pink", height: 140, flex: 1 }}>Box 3</Box>
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
    // height: 100,
    flexWrap: "nowrap", // "wrap" | "nowrap" | "wrap-reverse"
    alignContent: "flex-start", // "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"
    flexDirection: "column", // "row" | "column" | "row-reverse" | "column-reverse"
    justifyContent: "flex-start", // "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems: "stretch", // "stretch" | "flex-start" | "flex-end" | "center" | "baseline"
    // rowGap: 10,
    // columnGap: 10,
    // gap: 10,
  },
});
