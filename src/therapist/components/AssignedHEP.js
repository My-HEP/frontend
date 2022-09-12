import React from 'react';
import { Flex, VStack, Heading, Image, Text, Icon } from '@chakra-ui/react';
import { IconEdit } from '@tabler/icons';

const AssignedHEP = () => {
  const variables = {
    hepTitle: 'Tendon Glides',
    frequencyByDay: '1 time/day',
    frequencyByWeek: '2 days/week',
    duration: '4 reps',
    notes:
      "Do your best to get to 4 reps but if you need to start with 2 and work your way up, that's fine",
    therapist: 'You (Jane McTherapist)',
  };

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
      <Flex 
        justify="end" 
        order={['0', '0', '3']}>
        <Icon as={IconEdit} color="teal" cursor="pointer" />
      </Flex>
      <VStack
        align={['center', 'center', 'start']}
        width={['100%', '100%', '40%']}
        gap="2"
      >
        <Heading as="h3" size="md">
          {variables.hepTitle}
        </Heading>
        <Image src="https://bit.ly/3cOL9YU" boxSize="200px" minWidth='200px' objectFit="cover"/>
      </VStack>
      <VStack align="start" justify="center" spacing={3}>
        <Flex width='100%' justify="space-between">
          <Text>Frequency:</Text>
          <VStack spacing={0.5} align='end'>
            <Text>{variables.frequencyByDay}</Text>
            <Text>{variables.frequencyByWeek}</Text>
          </VStack>
        </Flex>
        <Flex width="100%" justify="space-between">
          <Text>Duration:</Text>
          <Text>{variables.duration}</Text>
        </Flex>
        <Flex width="100%" justify="space-between" gap="5">
          <Text>Assigned by:</Text>
          <Text textAlign='right'>{variables.therapist}</Text>
        </Flex>
        <Flex width="100%" justify="space-between" gap="5" paddingTop='1.5rem'>
          <Text>Notes:</Text>
          <Text textAlign="left">{variables.notes}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default AssignedHEP;
