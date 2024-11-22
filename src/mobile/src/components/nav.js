import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';



export default function Nbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigation = useNavigation();
  const [authState, setAuthState] = useState(isLoggedIn);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('pagInicial');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    setAuthState(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <View style={styles.navbar}>
      <View style={styles.navLinks}>
        {authState ? (
          <>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.navigate('BoasVindas')}>
              <Text style={styles.buttonText}>Página Inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.navigate('OpcoesCadastro')}>
              <Text style={styles.buttonText}>Cadastros</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={handleLogout}>
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#7E5A9B',
    padding: 10,
    marginTop: 30
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  navButton: {
    backgroundColor: 'transparent',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#F79824'
  },
  buttonText: {
    color: '#F79824',
    fontSize: 16
  }
});