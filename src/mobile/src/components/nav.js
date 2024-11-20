import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Nbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={styles.navLinks}>
        {isLoggedIn ? (
          <>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('BoasVindas')}
            >
              <Text style={styles.navButtonText}>Página Inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Financeiro')}
            >
              <Text style={styles.navButtonText}>Financeiro</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.navButtonText}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.navButtonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {isLoggedIn && (
        <TouchableOpacity style={styles.navButton} onPress={logout}>
          <Text style={styles.navButtonText}>Sair</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: '#7E5A9B',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  navLinks: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  navButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#F79824',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
