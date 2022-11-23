import { createContext, useEffect, useState } from 'react';
import { makeRequest } from '../axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('userSA')) || null
  );

  const login = async (inputs) => {
    const res = await makeRequest.post('/auth/login', inputs);
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem('userSA', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
