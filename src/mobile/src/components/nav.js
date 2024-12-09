import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Nbar() {
  const { isLoggedIn, logout } = useAuth();
  const navigation = useNavigation();
  const [authState, setAuthState] = useState(isLoggedIn);
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('pagInicial');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(!isOffcanvasVisible);
  };

  const closeOffcanvas = () => {
    if (isOffcanvasVisible) {
      setIsOffcanvasVisible(false);
    }
  };

  useEffect(() => {
    setAuthState(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {/* Navbar fixa no topo */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('pagInicial')}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleOffcanvas}>
          <Ionicons name="menu" size={28} color="#F79824" />
        </TouchableOpacity>
      </View>

      {/* Menu Offcanvas */}
      {isOffcanvasVisible && (
        <TouchableWithoutFeedback onPress={closeOffcanvas}>
          <View style={styles.overlay}>
            <View style={styles.offcanvas}>
              <View style={styles.offcanvasHeader}>
                <Text style={styles.offcanvasTitle}>Menu</Text>
                <TouchableOpacity onPress={toggleOffcanvas}>
                  <Ionicons name="close" size={28} color="#F79824" />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.offcanvasBody} keyboardShouldPersistTaps="handled">
                {authState ? (
                  <>
                    <TouchableOpacity
                      style={styles.navItem}
                      onPress={() => {
                        closeOffcanvas();
                        navigation.navigate('BoasVindas');
                      }}
                    >
                      <Text style={styles.navItemText}>Página Inicial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.navItem}
                      onPress={() => {
                        closeOffcanvas();
                        navigation.navigate('OpcoesCadastro');
                      }}
                    >
                      <Text style={styles.navItemText}>Cadastros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.navItem}
                      onPress={() => {
                        closeOffcanvas();
                        navigation.navigate('Financeiro');
                      }}
                    >
                      <Text style={styles.navItemText}>Financeiro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.navItem}
                      onPress={handleLogout}
                    >
                      <Text style={styles.navItemText}>Sair</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      style={styles.navItem}
                      onPress={() => {
                        closeOffcanvas();
                        navigation.navigate('Login');
                      }}
                    >
                      <Text style={styles.navItemText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.navItem}
                      onPress={() => {
                        closeOffcanvas();
                        navigation.navigate('Cadastro');
                      }}
                    >
                      <Text style={styles.navItemText}>Cadastre-se</Text>
                    </TouchableOpacity>
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#7E5A9B',
    elevation: 3,
    zIndex: 10,
    marginTop: 30,
  },
  logo: {
    width: 45,
    height: 45,
  },
  brand: {
    color: '#F79824',
    fontSize: 20,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    zIndex: 20,
  },
  offcanvas: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    elevation: 5,
    zIndex: 30,
    height: '100%',
    width: '50%',
    marginTop: 30,
  },
  offcanvasHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#7E5A9B',
    borderBottomWidth: 1,
    borderBottomColor: '#F79824',
  },
  offcanvasTitle: {
    color: '#F79824',
    fontSize: 18,
    fontWeight: 'bold',
  },
  offcanvasBody: {
    padding: 15,
  },
  navItem: {
    paddingVertical: 10,
  },
  navItemText: {
    fontSize: 16,
    color: '#7E5A9B',
    fontWeight: 'bold',
  },
});
