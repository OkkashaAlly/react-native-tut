import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    // <SafeAreaView> for iOS or android after <StatusBar/>
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome DImension</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
