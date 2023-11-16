import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export function AboutDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "green",
        drawerActiveBackgroundColor: "lightgreen",
        drawerContentStyle: {
          backgroundColor: "lightblue",
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "My Dashboard",
          drawerLabel: "Dashboard label",
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <AboutDrawer />
    </NavigationContainer>
  );
}
