import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import pokemonList from "./data.json";

export default function App() {
  return (
    // <SafeAreaView> for iOS or android after <StatusBar/>
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => (
          <View key={pokemon.id} style={styles.card}>
            <Text>{pokemon.type}</Text>
            <Text style={styles.cardText}>{pokemon.name}</Text>
          </View>
        ))}
      </ScrollView> */}
      <View style={styles.scrollView}>
        <FlatList
          data={[]}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          // horizontal
          // keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No items found</Text>}
        />
      </View>
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
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
});
