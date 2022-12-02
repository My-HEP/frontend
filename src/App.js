import { useFirebaseAuth } from './context/FirebaseAuthContext';
import { useEffect, useState } from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { Outlet, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import { firebaseConfig } from '../src/utils/firebase';
import { FirebaseAuthProvider } from './context/FirebaseAuthContext';

import { Routes, Route } from 'react-router-dom';
import Auth from './shared/pages/Auth';
import TherapistHome from './therapist/pages/Home';
import Patients from './therapist/pages/Patients';
import HEP from './therapist/pages/HEP';
import ExerciseLibrary from './therapist/pages/ExerciseLibrary';

function App() {
  initializeApp(firebaseConfig);

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Outlet />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
