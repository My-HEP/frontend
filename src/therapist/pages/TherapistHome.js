import React from "react";
import { Link } from "react-router-dom";
import {
    Flex,
    Icon,
    Heading,
    Text, 
    Button, 
    VStack,
    Avatar, 
    Link as HyperLink,
  } from '@chakra-ui/react';
import {  IconLogout, IconSettings, IconUsers, IconBarbell } from "@tabler/icons";
import {logoIcon} from '../components/LogoIcon';


function TherapistHome () {
    const variables = {
      userName: 'Jane McTherapist',
      patientNum: '35',
      hepNum: '29'
    }

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
        <Flex 
          gap='5' 
          mb={['0rem', '0rem', '2rem']} 
          align='center' 
          justify={['center', 'center', 'start' ]}
          minWidth={['300px', '300px', '500px']}
        >
          <Icon as={logoIcon} boxSize="8rem"/>
          <Heading marginTop='1.65rem'>Welcome to My HEP</Heading>
        </Flex>
        <Flex 
          direction={['column', 'column', 'row']}
          margin={['1rem 0', '1rem 0', '2rem 0']}
          align='center'
          justify='start'
        >
          <VStack 
            spacing={[3, 3, 5]}
          >
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
            <VStack 
              spacing={5} 
             align='start'
            >
              <Flex minWidth='175px' gap='2' justify='start'>
                <Text as='b' fontSize='2xl'>{variables.userName}</Text>
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
          <VStack 
            spacing={[5, 5, 10]} 
            width='50%'
            mt={['3rem', '3rem', 0]}
          >
            <Text as='b'>Currently serving {variables.patientNum} patients</Text>
            <Link to="/patients"><Button leftIcon={<IconUsers />} colorScheme="teal" variant="outline" size='lg' minWidth='12rem'>My Patients</Button></Link>
            <Text as='b'>{variables.hepNum} HEPs uploaded</Text>
            <Link to="/heps"><Button leftIcon={<IconBarbell />} colorScheme="teal" variant="outline" size='lg' minWidth='12rem'>My HEPs</Button></Link>
          </VStack>
        </Flex>
      </Flex>
     
    );
  }
  
  export default TherapistHome;