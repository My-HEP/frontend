import { useState, useEffect, createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';

const FirebaseAuthContext = createContext(undefined);

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const value = { user, userRole };

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(user => {
      if (user !== null) {
        const { uid } = user;
        const fetchUserRole = async () => {
          const response = await fetch(`http://localhost:3001/user/${uid}`);
          const userResponse = await response.json();

          setUser(user);
          setUserRole(userResponse?.role);
        };
        fetchUserRole();
      } else {
        setUser(null);
        setUserRole(null);
      }
    });
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
  return context;
}
