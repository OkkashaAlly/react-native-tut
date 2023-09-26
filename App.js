import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ActivityIndicator
        size="large" // "small"
        color="midnightblue"
        animating={true} // false
      />
    </View>
  );
}
