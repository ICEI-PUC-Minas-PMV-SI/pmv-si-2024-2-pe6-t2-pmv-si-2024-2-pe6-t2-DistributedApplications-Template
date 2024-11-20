import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoasVindas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Agenda Fácil!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    color: '#F79824',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
