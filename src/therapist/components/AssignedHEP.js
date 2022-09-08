import React from "react";
import {
  Flex,
  VStack,  
  Heading,
  Image,
  Text, 
  } from '@chakra-ui/react';
import { IconEdit } from '@tabler/icons';

const AssignedHEP = () => {
    const variables = {
        hepTitle: 'Tendon Glides',
        frequency: '1 time/day',
        duration: '4 reps',
        notes: 'Do your best to get to 4 reps but if you need to start with 2 and work your way up, that\'s fine',
        therapist: 'You (Jane McTherapist)'
    };

    return (
    <Flex
        width='100%'
        maxWidth='800px'
        justify="start"
        padding='1.5rem'
        gap='2'
        rounded='md'
        border='1px'
        borderColor='gray.300'
        boxShadow='xl'
    >
        <VStack 
        align='start'
        width='40%'
        >
            <Heading as='h3' size='md'>{variables.hepTitle}</Heading>
            <Image 
                src='https://bit.ly/3cOL9YU'
                boxSize='200px'
                objectFit='cover'
            />
        </VStack>
        <VStack 
            align='start'
            justify='center'
            spacing={3}
        >
            <Flex 
                width='90%' 
                justify='space-between'
            >
                <Text>Frequency:</Text>
                <Text>{variables.frequency}</Text>
            </Flex>
            <Flex
                width='90%' 
                justify='space-between'
            >
                <Text>Duration:</Text>
                <Text>{variables.duration}</Text>
            </Flex>
            <Flex 
                width='90%'
                justify='space-between'
                gap='10'
            >
                <Text>Notes:</Text>
                <Text textAlign='right'>{variables.notes}</Text>
            </Flex>
            <Flex 
            width='90%'
            justify='space-between'
            >
                <Text>Assigned by:</Text>
                <Text>{variables.therapist}</Text>
            </Flex>
        </VStack>
        <IconEdit color='teal' cursor='pointer'/>
    </Flex>
    );
  }

  
  export default AssignedHEP;