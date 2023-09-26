import { Image, Pressable, ScrollView, Text, View } from "react-native";
import logoImg from "./assets/adaptive-icon.png";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ScrollView>
        <Pressable onLongPress={() => alert("image Pressed so long")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => alert("pressed text")}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            modi possimus, neque, quas cupiditate sunt iusto cumque repudiandae
            animi accusamus, quibusdam ad voluptate praesentium temporibus
            perspiciatis non sequi saepe magni.
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
