import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '../src/utils/firebase';
import { FirebaseAuthProvider } from './context/FirebaseAuthContext';

function App() {
  initializeApp(firebaseConfig);

  return (
    <FirebaseAuthProvider>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
