import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            height: height > 500 ? "60%" : "90%",
            width: width > 500 ? "70%" : "90%",
          },
        ]}
      >
        <Text style={[styles.text, { fontSize: width > 500 ? 50 : 24 }]}>
          Welcome DImension
        </Text>
      </View>
    </View>
  );
}

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
  },
  text: {
    fontWeight: "bold",

    textAlign: "center",
  },
});
