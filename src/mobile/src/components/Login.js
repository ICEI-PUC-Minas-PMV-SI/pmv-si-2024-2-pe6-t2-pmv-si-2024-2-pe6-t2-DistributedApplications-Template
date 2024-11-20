import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Hook para navegação

  async function handleLogin() {
    try {
      const response = await api.post('/login', { email, password });
      if (response.status === 200) {
        const { token, user } = response.data;

        // Armazena o token no AsyncStorage
        await AsyncStorage.setItem('@userToken', token);
        await AsyncStorage.setItem('@userName', user.nome);

        // Navega para a tela de boas-vindas, passando o nome do usuário como parâmetro
        navigation.navigate('BoasVindas', { nome: user.nome });
      }
    } catch (error) {
      console.error("Erro no Login:", error);
      if (error.response) {
        if (error.response.status === 401) {
          Alert.alert("Erro", "Senha incorreta!");
        } else if (error.response.status === 404) {
          Alert.alert("Erro", "Usuário não encontrado!");
        } else {
          Alert.alert("Erro", "Erro ao tentar realizar o login.");
        }
      } else {
        Alert.alert("Erro", "Erro ao tentar se conectar com o servidor.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/icon.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Agenda Fácil</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    width: '90%',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    color: '#F79824',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#7E5A9B',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F79824',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
