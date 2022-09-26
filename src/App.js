import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './shared/components/contexts/AuthContext';
import Auth from './shared/pages/Auth';

// const fetchBackend = async () => {
//   const { data } = await axios.get('http://localhost:3001');
//   console.log(data);
//   return data;
// };

function App() {
  // const { data } = useQuery(['hep_backend'], fetchBackend);

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
