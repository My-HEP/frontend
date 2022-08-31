import React from "react";
import {
    Box,
    Flex,
    Image,
    Heading,
    Text, 
    Button, 
    VStack,
    Avatar, 
    IconButton
  } from '@chakra-ui/react';
import { IconPencil } from "@tabler/icons";
import InfoForm from '../sharedComponents/InfoForm';


function TherapistHome () {
    return (
      <Box width="80%" margin="auto">
        <Flex justify="start" alignItems="end">
          <Image 
            src="my-hep-logo.svg"
            boxSize="8rem"></Image>
          <Heading marginBottom="1.75rem" marginLeft="2rem">Welcome to My HEP</Heading>
        </Flex>
        <Flex marginTop="2.5rem">
          <VStack spacing="3.5rem" align='center' width='50%'>
            <Text as='b'>Currently serving 45 patients</Text>
            <Button colorScheme="teal" variant="outline">My Patients</Button>
            <Text as='b'>75 HEPs uploaded</Text>
            <Button colorScheme="teal" variant="outline">My HEPs</Button>
          </VStack>
          <VStack >
            <Flex align='end'>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
              <IconButton size='xs' icon={<IconPencil />} aria-label='edit content' variant='ghost' colorScheme='teal' />
            </Flex>
            <InfoForm />
          </VStack>
        </Flex>
      </Box>
       
    );
  }
  
  export default TherapistHome;