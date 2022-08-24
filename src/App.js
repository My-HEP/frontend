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
// import axios from 'axios';

function App() {

  const query = useQuery(['hep_backend'], async () => {
    const response = await fetch('http://localhost:3001')
    const data = await response.json()
    return data
  })

  return (
      <ChakraProvider theme={theme}>
        
        <Box textAlign="center" fontSize="xl">
      
            
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Heading>{query.data.hep_backend}</Heading>
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
