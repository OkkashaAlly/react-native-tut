import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    // <SafeAreaView> for iOS or android after <StatusBar/>
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="my name here"
          secureTextEntry={false} // -- for password
          // keyboardType="numeric" // -- for keyboard type
          autoCorrect={false} // -- for auto correct
          autoCapitalize="none" // -- for auto capitalize
        />
        <Text> My name is {text}</Text>
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
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
