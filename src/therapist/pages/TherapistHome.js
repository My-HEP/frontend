import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Icon,
  Heading,
  Text,
  Button,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import Confirmation from '../sharedComponents/LogoutConfirmation';
import EditModal from '../sharedComponents/Modal';
import { IconUsers, IconBarbell } from '@tabler/icons';
import { logoIcon } from '../sharedComponents/LogoIcon';

function TherapistHome() {
  const variables = {
    userName: 'Jane McTherapist',
    patientNum: '35',
    hepNum: '29',
  };

  return (
    <Flex
      height="100%"
      direction="column"
      justify="center"
      align={['center', 'center', 'start']}
      marginLeft={['10', '10', '20%']}
      marginRight={['10', '10', '20%']}
      marginTop={['20', '20', '40']}
      paddingTop="2rem"
      paddingBottom="100px"
    >
      <Flex
        gap={['2', '5']}
        mb={['1rem', '1rem', '2rem']}
        align="center"
        justify={['center', 'center', 'start']}
        minWidth={['300px', '300px', '500px']}
      >
        <Icon as={logoIcon} boxSize={['5rem', '8rem']} />
        <Heading mt={['0.75rem', '1.65rem']} textAlign={['center', 'left']}>
          Welcome to My HEP
        </Heading>
      </Flex>
      <Flex
        width="100%"
        direction={['column', 'column', 'row']}
        margin={['1rem 0', '0.5rem 0', '2rem 0']}
        align="center"
        justify="center"
      >
        <VStack spacing={[3, 3, 5]}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="2xl"
          />

          <VStack spacing={5} align="start">
            <Flex minWidth="175px" gap="2" justify="start">
              <Text as="b" fontSize="2xl">
                {variables.userName}
              </Text>
            </Flex>
            <EditModal />
            <Confirmation />
          </VStack>
        </VStack>
        <VStack
          spacing={[8, 7, 10]}
          width={['100%', '100%', '50%']}
          mt={['3rem', '3rem', 0]}
        >
          <Text as="b">Currently serving {variables.patientNum} patients</Text>
          <Link to="/patients">
            <Button
              leftIcon={<IconUsers />}
              colorScheme="teal"
              variant="outline"
              size="lg"
              minWidth="12rem"
            >
              My Patients
            </Button>
          </Link>
          <Text as="b">{variables.hepNum} HEPs uploaded</Text>
          <Link to="/exerciselibrary">
            <Button
              leftIcon={<IconBarbell />}
              colorScheme="teal"
              variant="outline"
              size="lg"
              minWidth="12rem"
            >
              My HEPs
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default TherapistHome;
