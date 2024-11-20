import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/components/AuthContext';
import AppNavigator from './src/components/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}