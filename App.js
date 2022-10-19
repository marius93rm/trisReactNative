import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {


  //xIsNext

  return (
    <View style={styles.container}>
      <Text style="styles.header">Tris</Text>
      <Text style="styles.subheader">A React Native Game</Text>
      <Text style="styles.giocatore">tocca al giocatore {xIsNext ? "Giocatore1": "Giocatore2"} </Text>

      <View>
        <View> {/*Riga 1*/}


        </View>
        <View> {/*Riga 2*/}

        </View>
        <View> {/*Riga 3*/}

        </View>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  giocatore: {
    fontSize: 18,
  }

});
