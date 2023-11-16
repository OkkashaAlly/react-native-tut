import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CourseListScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>
      {/* <Button
        title="Go to about"
        onPress={() => navigation.navigate("About")}
      /> */}
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

export default CourseListScreen;
