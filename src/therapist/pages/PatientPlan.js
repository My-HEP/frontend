import React from "react";
import {
  Flex,
  VStack, 
  Avatar, 
  Heading,
  Text, 
  Link as Hyperlink,
  Button
  } from '@chakra-ui/react';
import { IconMail, IconPhone, IconSettings, IconPlus, IconEye } from '@tabler/icons';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
// import AssignedHEP from '../components/AssignedHEP';
import { Link } from 'react-router-dom';

function PatientPlan () {
    const variables = {
      patientName: 'Patty Patient',
      patientPhone: '123-456-7890',
      patientEmail: 'perfectpatient@hotmail.com',
    };

    return (
      <>
        <SideNav />
        <BottomNav />
        <Link to="/therapisthome">
          <Header />
        </Link>
        <Flex
        height="100%"
        direction="column"
        justify="flex-start"
        marginLeft={['10', '10', '20%']}
        marginRight={['10', '10', '20%']}
        paddingTop="2rem"
        paddingBottom="100px"
        gap='55'
      >
        <Flex  
          justify='start'
          align='center'
          gap='3'
        >
          <Avatar
              name="Patty Patient"
              src="https://bit.ly/3eoXqDz"
              size="2xl"
              marginRight='3rem'
            />
          <VStack
            align='start'
            spacing={5}
            width='100%'
          >
            <Heading as='h1' size='xl'>{variables.patientName}</Heading>
            <Flex 
              width='50%'
              justify='space-between'
            >
              <Flex gap='2'>
                <IconPhone />
                <Text>{variables.patientPhone}</Text>
              </Flex>
              <Flex gap='2'>
                <IconMail />
                <Text>{variables.patientEmail}</Text>
              </Flex>
            </Flex>
            <Hyperlink 
              color='teal'
            >
              <Flex gap='2'>
                <IconSettings color='teal'/>
              Edit Patient Information
             </Flex>
            </Hyperlink>
          </VStack>
        </Flex>
        <Flex 
          width='75%'
          justify='space-between'
          align='center'
        >
          <Heading as='h2' fontSize='24px'>Home Exercise Programs</Heading>
          <Button 
            leftIcon={<IconPlus />} 
            variant='solid' 
            colorScheme='teal' 
            size='lg'
          >
            Assign New HEP  
          </Button>
        </Flex>
        <AssignedHEP />
        <Button 
          leftIcon={<IconEye />} 
          variant='solid' 
          colorScheme='teal' 
          size='lg'
          width='250px'
        >
          Patient View
        </Button>
      </Flex>
      </>
    );
  }
  
  export default PatientPlan;