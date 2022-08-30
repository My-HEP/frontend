import React from "react";
import {
    Box,
    Flex,
    Image,
    Heading,
  } from '@chakra-ui/react';

function TherapistHome () {
    return (
      <Box>
        <Flex justify="start" alignItems="end">
          <Image src="my-hep-logo.svg"></Image>
          <Heading marginBottom="3rem">Welcome to My HEP</Heading>
        </Flex>
       </Box>  
    );
  }
  
  export default TherapistHome;