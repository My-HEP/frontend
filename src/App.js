import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const fetchBackend = async () => {
  const { data } = await axios.get('http://localhost:3001');
  console.log(data);
  return data;
};

function App() {
  const { data } = useQuery(['hep_backend'], fetchBackend);

  return (
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
