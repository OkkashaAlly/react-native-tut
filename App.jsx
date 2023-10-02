import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import pokemon from "./data.json";

export default function App() {
  return (
    // <SafeAreaView> for iOS or android after <StatusBar/>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      {pokemon.map(pokemon => (
        <View key={pokemon.id} style={styles.card}>
          <Text>{pokemon.type}</Text>
          <Text style={styles.cardText}>{pokemon.name}</Text>
        </View>
      ))}
      </ScrollView>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
});
