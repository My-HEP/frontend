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
      <Flex 
        height="100%"
        direction="column"
        justify="flex-start"
        marginLeft={['10', '10', '20%']}
        marginRight={['10', '10', '20%']}
        paddingTop="2rem"
        paddingBottom="100px"
      >
        <Flex gap='5' marginBottom='2rem' align='center'>
          <Icon as={logoIcon} boxSize="8rem"/>
          <Heading marginTop='1.65rem'>Welcome to My HEP</Heading>
        </Flex>
        <Flex 
          direction={['column', 'column', 'row']}
          margin="2rem 0 2rem 0"
          align='center'
          justify='start'
        >
          <VStack spacing={5}>
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
      </Flex>
     
    );
  }
  
  export default TherapistHome;