import React from 'react';
import { Flex, VStack, Heading, Image, Text } from '@chakra-ui/react';
import { useFirebaseAuth } from '../../context/FirebaseAuthContext';
import { useLocation } from 'react-router-dom';

import AssignmentModal from './AssignmentModal';
import ViewHEPModal from '../../patient/ViewHEPModal';

const AssignedHEP = ({
  patientId,
  exerciseId,
  hepTitle,
  url,
  frequencyByDay,
  frequencyByWeek,
  duration,
  durationUnits,
  notes,
  therapist,
  setUpdatedHEP,
  HEPs,

}) => {
  const { userRole } = useFirebaseAuth() ?? {};

  let therapistName = `${therapist?.firstName} ${therapist?.lastName}`;

  const variables = {
    patientId,
    exerciseId,
    hepTitle,
    url,
    frequencyByDay,
    frequencyByWeek,
    duration,
    durationUnits,
    notes,
    therapistName,
  };
  
  const location = useLocation();
  const patientView = location.pathname.includes('patientView');
 
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      width="100%"
      maxWidth="800px"
      justify="start"
      padding="1.5rem"
      gap="4"
      rounded="md"
      border="1px"
      borderColor="gray.300"
      boxShadow="xl"
    >
      <Flex justify="end" order={['0', '0', '3']}>
        {userRole === 'PATIENT' || patientView ? (
          <div></div>
        ) : (
          <AssignmentModal
            type="edit"
            patientId={patientId}
            assignmentData={variables}
            setUpdatedHEP={setUpdatedHEP}
            HEPs={HEPs}
          />
        )}
      </Flex>
      <VStack
        align={['center', 'center', 'start']}
        width={['100%', '100%', '40%']}
        gap="2"
      >
        <Heading as="h3" size="md">
          {variables.hepTitle}
        </Heading>
        {userRole === 'PATIENT' || patientView ? (
          <ViewHEPModal url={variables.url} hepTitle={variables.hepTitle} />
        ) : (
          <Image
            src={variables.url}
            boxSize="200px"
            minWidth="200px"
            objectFit="cover"
          />
        )}
      </VStack>
      <VStack
        align="start"
        justify="center"
        spacing={3}
        width={['100%', '100%', '50%']}
        maxWidth={'400px'}
        marginLeft={['auto', 'auto', '4']}
        marginRight={['auto', 'auto', '0']}
      >
        <Flex width="100%" justify="space-between">
          <Text>Frequency:</Text>
          <VStack spacing={0.5} align="end">
            <Text>{variables.frequencyByDay} times/day</Text>
            <Text>
              {variables.frequencyByWeek}{' '}
              {variables.frequencyByWeek === 1 ? 'day/week' : 'days/week'}
            </Text>
          </VStack>
        </Flex>
        <Flex width="100%" justify="space-between">
          <Text>Duration:</Text>
          <Text>
            {variables.duration} {variables.durationUnits}
          </Text>
        </Flex>
        <Flex width="100%" justify="space-between" gap="5">
          <Text>Assigned by:</Text>
          <Text textAlign="right">{variables.therapistName}</Text>
        </Flex>
        <Flex width="100%" justify="space-between" gap="5" paddingTop="1.5rem">
          <Text>Notes:</Text>
          <Text textAlign="left">{variables.notes}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default AssignedHEP;
