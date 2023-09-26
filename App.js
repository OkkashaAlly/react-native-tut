import { Button, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button
        title="Click me"
        onPress={() => alert("Hello World!")}
        color="green"
        disabled={false}
      />
    </View>
  );
}
