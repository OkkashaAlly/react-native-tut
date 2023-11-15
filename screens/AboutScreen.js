import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const AboutScreen = ({ route, navigation }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutScreen {name}</Text>
      <Button
        title="update name"
        onPress={() => navigation.setParams({ name: "OkkashaAlly" })}
      />
      <Button
        title="go home"
        onPress={() =>
          navigation.navigate("Home", { results: "Data from about" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default AboutScreen;
