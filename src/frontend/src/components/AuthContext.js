import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(''); 
  const [userId, setUserId] = useState(''); 

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUserName = localStorage.getItem('userName'); 
    const storedUserId = localStorage.getItem('userId'); 

    if (token && storedUserName && storedUserId) {
      setIsLoggedIn(true);
      setUserName(storedUserName); 
      setUserId(storedUserId); 
    }
  }, []);

  const login = (token, nome, id) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', nome); 
    localStorage.setItem('userId', id); 
    setUserName(nome); 
    setUserId(id);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName'); 
    localStorage.removeItem('userId'); 
    setIsLoggedIn(false);
    setUserName(''); 
    setUserId(''); 
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
