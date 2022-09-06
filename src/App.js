import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
=======
import Header from './therapist/components/Header.js';
import SideNav from './therapist/components/SideNav.js';
import BottomNav from './therapist/components/BottomNav';
>>>>>>> b849a53687fc7ec7281001810d67512185b11e62

const fetchBackend = async () => {
  const { data } = await axios.get('http://localhost:3001');
  console.log(data);
  return data;
};

function App() {
  const { data } = useQuery(['hep_backend'], fetchBackend);

  return (
    <ChakraProvider theme={theme}>
<<<<<<< HEAD
=======
      <SideNav />
      <BottomNav />
      
      <Header />
      
>>>>>>> b849a53687fc7ec7281001810d67512185b11e62
      <Outlet />
    </ChakraProvider>
  );
}

export default App;
