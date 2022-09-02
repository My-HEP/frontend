import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';
import Header from './therapist/components/Header.js';
import SideNav from './therapist/components/SideNav.js';
import BottomNav from './therapist/components/BottomNav';

const fetchBackend = async () => {
  const { data } = await axios.get('http://localhost:3001');
  console.log(data);
  return data;
};

function App() {
  const { data } = useQuery(['hep_backend'], fetchBackend);

  return (
    <ChakraProvider theme={theme}>
      <SideNav />
      <BottomNav />
      
      <Header />
      
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
