import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('userSA')) || null
  );

  const login = () => {
    //write login functionality here
    setCurrentUser({
      id: 1,
      name: 'john doe',
      profilePic:
        'https://media.istockphoto.com/id/1286272331/photo/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-background.jpg?b=1&s=612x612&w=0&k=20&c=Sq04NCS9ya5LRUh9ng_Y4BK3XrOZyGabA5eQ9qUoiFg=',
    });
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
