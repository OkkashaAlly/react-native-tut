import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide" // "fade" // "none"
        presentationStyle="pageSheet" // "fullScreen" // "formSheet" // "overFullScreen" // "overCurrentContext" // "currentContext" -- iOS only
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Hello World!</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
