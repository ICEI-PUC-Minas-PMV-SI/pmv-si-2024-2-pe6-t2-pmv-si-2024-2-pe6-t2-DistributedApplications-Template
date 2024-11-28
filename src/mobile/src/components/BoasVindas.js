import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoasVindas({ route }) {
  const nome = route?.params?.nome || '';

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo(a), {nome}!</Text>

      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          Sua agenda organizada, seus clientes satisfeitos.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'Black',
    textAlign: 'left',
    marginBottom: 20,
  },
  messageBox: {
    backgroundColor: '#9A879D66',
    borderRadius: 8,
    padding: 15,
    maxWidth: 350,
    width: '100%',
  },
  messageText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
});
