import React from "react";
import {
    Box,
    Flex,
    Image,
    Heading,
    Text, 
    Button, 
    VStack,
    Avatar
  } from '@chakra-ui/react';

function TherapistHome () {
    return (
      <Box width="80%" margin="auto">
        <Flex justify="start" alignItems="end">
          <Image 
            src="my-hep-logo.svg"
            boxSize="8rem"></Image>
          <Heading marginBottom="1.75rem" marginLeft="2rem">Welcome to My HEP</Heading>
        </Flex>
        <Flex>
          <VStack spacing="3.5rem" align='center' padding="2rem" marginTop="2rem">
            <Text as='b'>Currently serving 45 patients</Text>
            <Button colorScheme="twitter" variant="outline">My Patients</Button>
            <Text as='b'>75 HEPs uploaded</Text>
            <Button colorScheme="twitter" variant="outline">My HEPs</Button>
          </VStack>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
          <VStack>
            
          </VStack>
        </Flex>
      </Box>
       
    );
  }
  
  export default TherapistHome;