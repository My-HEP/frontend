import React, { useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../../utils/firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('');

  const createAccount = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(email, password);
      console.log(user);
      return user;
    } catch (error) {
      const errorMessage = error.message;
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// const signIn = async (email, password) => {
//   const auth = getAuth();
//   try {
//     const user = await signInWithEmailAndPassword(auth, email, password);
//     return user;
//   } catch (error) {
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     console.log(error.message);
//     if (error.code === 'auth/wrong-password') {
//       alert('Incorrect password.');
//     }
//   }
// };

// export { signIn };
