import { Image, ScrollView, Text, View } from "react-native";
import logoImg from "./assets/adaptive-icon.png";
// const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi
          possimus, neque, quas cupiditate sunt iusto cumque repudiandae animi
          accusamus, quibusdam ad voluptate praesentium temporibus perspiciatis
          non sequi saepe magni.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi
          possimus, neque, quas cupiditate sunt iusto cumque repudiandae animi
          accusamus, quibusdam ad voluptate praesentium temporibus perspiciatis
          non sequi saepe magni.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
