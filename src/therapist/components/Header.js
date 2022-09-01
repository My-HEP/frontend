import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading, 
  Icon
  } from '@chakra-ui/react';
 import {logoIcon} from './LogoIcon';
  
 

function Header () {
    return (
      <Box display="flex" justifyContent="end">
          <Flex flexDirection="column" alignItems="center" padding='1rem' minWidth="175px">
              <Icon as={logoIcon} boxSize='4rem'/>
              <Spacer /> 
               <Heading size="md">My HEP</Heading>
          </Flex>
        </Box>
      
    );
  }
  
  export default Header;