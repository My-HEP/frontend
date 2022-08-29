import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
        
        <Box textAlign="center" fontSize="xl">
      
            
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Heading>{data?.hep_backend}</Heading>
            <TherapistHome />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
              </Text>
              <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
            </VStack>
          </Grid>

        </Box>
      </ChakraProvider>
  );
}

export default App;
