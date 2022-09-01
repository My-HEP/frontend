import React from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Icon,
    Heading,
    Text, 
    Button, 
    VStack,
    Avatar, 
    Link as HyperLink,
  } from '@chakra-ui/react';
import {  IconLogout, IconSettings } from "@tabler/icons";
import {logoIcon} from '../components/LogoIcon';


function TherapistHome () {
    return (
      <Box width="80%" margin="5rem auto 0 auto">
        <Flex justify="start" alignItems="end">
          <Icon as={logoIcon} boxSize="8rem"/>
          <Heading marginBottom="1.75rem" marginLeft="2rem">Welcome to My HEP</Heading>
        </Flex>
        <Flex marginTop="2.5rem">
          <VStack spacing={5} width='50%'>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
            <VStack spacing={5} align='start'>
              <Flex minWidth='175px' gap='2' justify='start'>
                <Text as='b' fontSize='2xl'>Therapist Name</Text>
              </Flex>
              <HyperLink color='teal'>
                <Flex minWidth='175px' gap='2'>
                  <IconSettings /> 
                  <Text>Edit information</Text>
                </Flex>
              </HyperLink>
              <HyperLink color='teal'>
                <Flex minWidth='175px' gap='2'>
                  <IconLogout /> 
                  <Text>Log out</Text>
                </Flex>
              </HyperLink>
            </VStack>
          </VStack>
          <VStack spacing={10} width='50%'>
            <Text as='b'>Currently serving 45 patients</Text>
            <Link to="/patients"><Button colorScheme="teal" variant="outline" size='lg' minWidth='10rem'>My Patients</Button></Link>
            <Text as='b'>75 HEPs uploaded</Text>
            <Link to="/heps"><Button colorScheme="teal" variant="outline" size='lg' minWidth='10rem'>My HEPs</Button></Link>
          </VStack>
        </Flex>
      </Box>
     
    );
  }
  
  export default TherapistHome;