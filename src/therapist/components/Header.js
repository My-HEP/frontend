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
          <Flex justify="end" alignItems="end" fontSize="xl" padding='1rem' minWidth="250px">
              <Image
                boxSize='5rem'
                src="my-hep-logo.svg" alt="dumbell inside house"
              />
              <Spacer />
              <Heading minWidth="130px">My HEP</Heading>
          </Flex>
        </Box>
      
    );
  }
  
  export default Header;