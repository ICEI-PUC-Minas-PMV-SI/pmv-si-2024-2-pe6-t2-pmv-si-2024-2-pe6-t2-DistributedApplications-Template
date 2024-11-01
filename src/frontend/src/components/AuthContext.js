import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token, nome) => {
    localStorage.setItem('authToken', token);
    setUserName(nome);
    setIsLoggedIn(true); // Atualiza o estado imediatamente
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false); // Atualiza o estado imediatamente
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
