import { useState, useEffect, createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';

const FirebaseAuthContext = createContext(undefined);

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error(
      'useFirebaseAuth must be used within a FirebaseAuthProvider'
    );
  }
  return context.user;
}
