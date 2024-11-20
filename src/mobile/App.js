import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cadastro from './src/components/cadastro';


export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
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
});
