import React from "react";
import {
  Box,
  Flex,
  Heading,
    Image
  } from '@chakra-ui/react';

function Header () {
    return (
      <Box >
        <Flex justify="end" align="center" fontSize="xl">
            <Image
              boxSize='5rem'
              src="my-hep-logo.svg" alt="dumbell inside house"/>
            <Heading>My HEP</Heading>
      
        </Flex>
      </Box>
    );
  }
  
  export default Header;