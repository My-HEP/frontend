import React from "react";
import {
  Box,
  Flex,
  Heading, 
  Icon, 
  Avatar
  } from '@chakra-ui/react';
 import {logoIcon} from './LogoIcon';
  
 

function Header () {
    return (
      <Box  width='100%' justify="end" align='center'>
        <Flex align='center' justify='space-between' p='1rem 0'>
          <Avatar 
            name='Dan Abrahmov' 
            src='https://bit.ly/dan-abramov' 
            size='xl' 
            ml={[ '1rem', '1rem', '5rem' ]}
          />
          <Flex flexDirection="column" align="end"  mr='1rem'>
              <Icon as={logoIcon} boxSize='4rem'/>
              <Heading size="md">My HEP</Heading>
          </Flex>
        </Flex>
      </Box>
      
    );
  }
  
  export default Header;