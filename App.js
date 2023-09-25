import { Image, ImageBackground, Text, View } from "react-native";
import logoImg from "./assets/adaptive-icon.png";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  console.log("🚀 ~ file: App.js:6 ~ logoImg:", typeof logoImg);

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
      {/* <Image
        source={{ uri: "https://picsum.photos/250" }}
        style={{ width: 250, height: 250 }}
      /> */}
      <ImageBackground source={logoImg} style={{flex: 1}}>
        <Text>Hello bg img</Text>
      </ImageBackground>
    </View>
  );
}
