import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Header from './therapist/components/Header.js'
import TherapistHome from './therapist/pages/TherapistHome';
 
const fetchBackend = async () => {
    const {data} = await axios.get('http://localhost:3001')
    console.log(data)
    return data
  }

function App() {

  const { data } = useQuery(['hep_backend'], fetchBackend)

  return (
      <ChakraProvider theme={theme}>
        <Header /> 
        <TherapistHome />
      </ChakraProvider>
  );
}

export default App;
