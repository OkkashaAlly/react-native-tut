import { Alert, Button, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data!")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data!", "DOB Incorrect")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data!", "DOB Incorrect", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
      />
    </View>
  );
}
