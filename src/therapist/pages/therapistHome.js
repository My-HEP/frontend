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
    Icon, 
    Editable, 
    EditableInput, 
    EditablePreview
  } from '@chakra-ui/react';
import { IconPhone, IconMail,  IconLock, IconPencil, IconEdit } from "@tabler/icons";
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
        <Flex>
          <VStack spacing="3.5rem" align='center' padding="2rem" marginTop="2rem">
            <Text as='b'>Currently serving 45 patients</Text>
            <Button colorScheme="teal" variant="outline">My Patients</Button>
            <Text as='b'>75 HEPs uploaded</Text>
            <Button colorScheme="teal" variant="outline">My HEPs</Button>
          </VStack>
          <VStack>
            <Flex align="end">
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
              <Icon as={IconPencil} />
            </Flex>
            <InfoForm />
            {/* <Editable defaultValue='Therapist Name'>
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Text >Jane McTherapist</Text>
            <Flex>
              <Icon as={IconPhone} />
            </Flex>
            <Flex>
              <Icon as={IconMail} />
            
            </Flex>
            <Flex>
              <Icon as={IconLock} />
              
            </Flex>
            <Flex align="end">
              <Icon as={IconEdit} />
              <Text>Edit Information</Text>
            </Flex> */}
          </VStack>
        </Flex>
      </Box>
       
    );
  }
  
  export default TherapistHome;