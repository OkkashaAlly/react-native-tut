import { useState } from "react";
import { StatusBar, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen" // android only
        barStyle="dark-content" // light-content (text-color)
        hidden={false}
      />
    </View>
  );
}
