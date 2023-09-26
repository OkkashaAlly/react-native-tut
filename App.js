import { Alert, Button, Text, View, StyleSheet } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Stylesheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    padding: 60,
  },
});