import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState("");

  return (
    // <SafeAreaView> for iOS or android after <StatusBar/>
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <Text>Dark mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(prevState => !prevState)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
});
