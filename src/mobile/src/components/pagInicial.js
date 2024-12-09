import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function PagInicial() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/icon.png')} 
          style={styles.image}
        />
        <Text style={styles.title}>
          Agenda{'\n'}Fácil
        </Text>
        <Text style={styles.subtitle}>
          Simplifique sua agenda, impulsione seu negócio.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    width: '75%',
  },
  image: {
    width: '75%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    color: '#F79824',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Luckiest Guy',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
  }
});

export default PagInicial;