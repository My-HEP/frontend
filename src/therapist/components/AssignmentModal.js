import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Icon,
  Flex,
  VStack,
  Heading,
  Text,
  Input,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import { IconPlus, IconEdit } from '@tabler/icons';
import SearchBar from './SearchBar';

const AssignmentModal = ({ type }) => {
  const exercises = [
    { title: 'Tendon Glides' },
    { title: 'Carpal Tunnel' },
    { title: 'Leg Lifts' },
  ];
  let text, heading;
  if (type === 'new') {
    heading = 'Assign New Exercise';
    text = 'Assign Exercise';
  } else {
    heading = 'Edit Assigned Exercise';
    text = 'Update Exercise';
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {type === 'new' ? (
        <Button
          leftIcon={<IconPlus />}
          variant='solid'
          colorScheme='teal'
          size='lg'
          minWidth='220px'
          onClick={onOpen}
        >
          Assign New Exercise
        </Button>
      ) : (
        <Icon
          as={IconEdit}
          color='teal'
          cursor='pointer'
          onClick={onOpen}
        />
      )}

      <Modal
        size='4xl'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justify='space-between'
              align='start'
              paddingBottom='1rem'
            >
              <VStack
                width='48%'
                align='start'
                spacing={5}
              >
                <Heading
                  as='h2'
                  size='sm'
                >
                  Select Existing Exercise
                </Heading>
                <SearchBar />
                <TableContainer
                  width='100%'
                  maxWidth='700px'
                  border='1px'
                  borderRadius='7'
                  borderColor='lightgray'
                >
                  <Table variant='simple'>
                    <Tbody>
                      {exercises.map(exercise => {
                        return (
                          <Tr>
                            <Td>{exercise.title}</Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Heading
                  as='h2'
                  size='sm'
                >
                  Upload New Exercise
                </Heading>
                <Input type='file' />
              </VStack>
              <VStack
                align='start'
                width='48%'
                spacing={5}
              >
                <Heading
                  as='h2'
                  size='sm'
                >
                  Set Exercise Parameters
                </Heading>
                <Flex
                  flexDir='column'
                  width='100%'
                  gap='5'
                  padding='2rem 0'
                >
                  <Flex justify='space-between'>
                    <Heading
                      as='h3'
                      size='sm'
                    >
                      Frequency
                    </Heading>
                    <Flex
                      flexDir='column'
                      align='end'
                      gap='2'
                      width='50%'
                    >
                      <Flex
                        width='100%'
                        justify='start'
                        align='center'
                        gap='5'
                      >
                        <NumberInput
                          width='5rem'
                          min={1}
                          max={100}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text>times/day</Text>
                      </Flex>
                      <Flex
                        width='100%'
                        align='center'
                        justify='start'
                        gap='5'
                      >
                        <NumberInput
                          width='5rem'
                          min={1}
                          max={7}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text>days/week</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex justify='space-between'>
                    <Heading
                      as='h3'
                      size='sm'
                    >
                      Duration
                    </Heading>
                    <Flex
                      flexDir='column'
                      width='50%'
                    >
                      <Flex
                        flexDir='row'
                        gap='5'
                        width='100%'
                        justify='start'
                      >
                        <NumberInput
                          width='5rem'
                          min={1}
                          max={100}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Select
                          placeholder='units'
                          width='6rem'
                        >
                          <option value='option1'>reps</option>
                          <option value='option2'>seconds</option>
                          <option value='option3'>minutes</option>
                        </Select>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Heading
                  as='h2'
                  size='sm'
                >
                  Add Additional Notes
                </Heading>
                <Textarea placeholder='Provide additional instructions here.' />
              </VStack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='teal'
              mr={3}
              onClick={onClose}
            >
              Discard
            </Button>
            <Button variant='outline'>{text}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignmentModal;
