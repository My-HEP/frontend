import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
    Image
  } from '@chakra-ui/react';

function Header () {
    return (
      <Box display="flex" justifyContent="end">
          <Flex flexDirection="column" alignItems="center" padding='1rem' minWidth="175px">
              <Image
                boxSize='4.5rem'
                src="my-hep-logo.svg" alt="dumbell inside house"
              />
              <Spacer /> 
               <Heading size="md">My HEP</Heading>
          </Flex>
        </Box>
      
    );
  }
  
  export default Header;