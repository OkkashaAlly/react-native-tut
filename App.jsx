import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    // <SafeAreaView> for iOS or android after <StatusBar/>
    <SafeAreaView style={styles.safeView}>
      <CustomButton onPress={() => alert("Hello World")} title="Press Me" />
      <StatusBar style="auto" backgroundColor="plum" />
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
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },

});
