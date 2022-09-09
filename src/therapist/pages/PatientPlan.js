import React from 'react';
import {
  Flex,
  VStack,
  Avatar,
  Heading,
  Text,
  Link as Hyperlink,
  Button,
} from '@chakra-ui/react';
import {
  IconMail,
  IconPhone,
  IconSettings,
  IconPlus,
  IconEye,
} from '@tabler/icons';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import AssignedHEP from '../components/AssignedHEP';
import EditModal from '../sharedComponents/Modal';
import { Link } from 'react-router-dom';

function PatientPlan() {
  const variables = {
    patientName: 'Patty Patient',
    patientPhone: '123-456-7890',
    patientEmail: 'perfectpatient@hotmail.com',
  };

  return (
    <>
      <SideNav />
      <BottomNav />
      <Link to='/therapisthome'>
        <Header />
      </Link>
      <Flex
        height='100%'
        direction='column'
        justify='flex-start'
        marginLeft={['4', '10', '20%']}
        marginRight={['4', '10', '10%']}
        paddingTop='2rem'
        paddingBottom='100px'
        gap='70'
        maxWidth='800px'
      >
        <Flex
          flexDirection={['column', 'row', 'row']}
          justify={['center', 'center', 'space-between']}
          align='center'
          gap='3'
          margin={['0 auto', '0 0', '0 0 2rem 0']}
          maxWidth='800px'
        >
          <Avatar
            name='Patty Patient'
            src='https://bit.ly/3eoXqDz'
            size='2xl'
            marginRight={['0', '3rem', '3rem']}
          />
          <VStack
            justify='center'
            align='start'
            spacing={5}
          >
            <Heading
              as='h1'
              size='xl'
            >
              {variables.patientName}
            </Heading>
            <Flex
              width='100%'
              justify='space-between'
              flexDirection={['column', 'column', 'row']}
              gap='3'
              flexWrap='wrap'
            >
              <Flex
                gap='2'
                minWidth='200px'
              >
                <IconPhone />
                <Text>{variables.patientPhone}</Text>
              </Flex>
              <Flex
                gap='2'
                minWidth='200px'
              >
                <IconMail />
                <Text>{variables.patientEmail}</Text>
              </Flex>
            </Flex>
            <EditModal
              text={'Edit Patient Plan'}
              heading={'Edit Patient Information'}
            />
          </VStack>
        </Flex>
        <Flex
          width='100%'
          justify={['center', 'space-between', 'space-between']}
          align='center'
          flexDirection={['column', 'row', 'row']}
          gap={['8', '8', '4']}
        >
          <Heading
            as='h2'
            fontSize='24px'
          >
            Home Exercise Programs
          </Heading>
          <Button
            leftIcon={<IconPlus />}
            variant='solid'
            colorScheme='teal'
            size='lg'
            minWidth='220px'
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
          width='220px'
          zIndex='-1'
          margin={['0 auto', '0 0', '0 0']}
        >
          Patient View
        </Button>
      </Flex>
    </>
  );
}

export default PatientPlan;
