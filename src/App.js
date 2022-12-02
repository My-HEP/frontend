import { ChakraProvider, theme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../src/utils/firebase';

function App() {
  initializeApp(firebaseConfig);

  return (
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
