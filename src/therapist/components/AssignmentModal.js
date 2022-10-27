import { useState } from 'react';
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
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  // IconButton,
  // Input,
  // Tooltip,
  // FormLabel,
} from '@chakra-ui/react';
import ExerciseList from './ExerciseList';
import SearchBar from './SearchBar';

import {
  IconPlus, 
  IconEdit, 
  // IconFileUpload 
} from '@tabler/icons';

const AssignmentModal = ({ type, patientId}) => {
  
  const [frequencyByDay, setFrequencyByDay] = useState();
  const [frequencyByWeek, setFrequencyByWeek] = useState('');
  const [duration, setDuration] = useState('');
  const [durationUnits, setDurationUnits] = useState('');
  const [notes, setNotes] = useState('');

  let assignHEP = () =>{
    let assignedData = { exerciseId, patientId, frequencyByDay, frequencyByWeek, duration, durationUnits, notes, assignedById }
    fetch('http://localhost:3001/therapist/addHEPExercise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assignedData),
    });
    onClose();
  }

  let updateHEP = () =>{
    onClose();
  }

  let exerciseId = '1jiouklkjio7890';
  let assignedById = 22;


  let text, heading, method;
  if (type === 'new') {
    heading = 'Assign New Exercise';
    text = 'Assign Exercise';
    method = assignHEP;
  } else {
    heading = 'Edit Assigned Exercise';
    text = 'Update Exercise';
    method = updateHEP;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {type === 'new' ? (
        <Button
          leftIcon={<IconPlus />}
          variant="solid"
          colorScheme="teal"
          size="lg"
          minWidth="220px"
          onClick={onOpen}
        >
          Assign New Exercise
        </Button>
      ) : (
        <Icon as={IconEdit} color="teal" cursor="pointer" onClick={onOpen} />
      )}

      <Modal size={['sm', 'lg', '4xl']} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDir={['column', 'column', 'row']}
              justify="space-between"
              align={['center', 'center', 'start']}
              paddingBottom="1rem"
            >
              <VStack width={['100%', '100%', '48%']} align="start" spacing={5}>
                <Heading as="h2" size="sm">
                  Select Existing Exercise
                </Heading>
                <SearchBar />
               <ExerciseList />
                {/* Upload New Exercise from assignment modal feature for later */}
                {/* <Heading as="h2" size="sm">
                  Upload New Exercise
                </Heading>
                <Flex
                  align="center"
                  justify="center"
                  width="100%"
                  border="1px"
                  borderRadius="7"
                  borderColor="lightgray"
                >
                  <Tooltip label="Upload new exercise">
                    <FormLabel
                      htmlFor="fild-upload"
                      margin="auto auto"
                      padding="2rem"
                    >
                      <Input type="file" id="file-upload" hidden />
                      <IconButton
                        as={IconFileUpload}
                        height="100px"
                        width="100px"
                        aria-label="upload new exercise"
                        variant="ghost"
                        colorScheme="teal"
                      />
                    </FormLabel>
                  </Tooltip>
                </Flex> */}
              </VStack>
              <VStack align="start" width={['100%', '100%', '48%']} spacing={5}>
                <Heading
                  as="h2"
                  size="sm"
                  marginTop={['1.5rem', '1.5rem', '0']}
                >
                  Set Exercise Parameters
                </Heading>
                <Flex flexDir="column" width="100%" gap="5" padding="2rem 0">
                  <Flex justify="space-between">
                    <Heading as="h3" size="sm">
                      Frequency
                    </Heading>
                    <Flex flexDir="column" align="end" gap="2" width="50%">
                      <Flex width="100%" justify="start" align="center" gap="5">
                        <NumberInput
                          width="5rem"
                          min={1}
                          max={100}
                          focusBorderColor="teal.500"
                          value={frequencyByDay}
                          onChange={(value) => setFrequencyByDay(value)}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text>times/day</Text>
                      </Flex>
                      <Flex width="100%" align="center" justify="start" gap="5">
                        <NumberInput
                          width="5rem"
                          min={1}
                          max={7}
                          focusBorderColor="teal.500"
                          value={frequencyByWeek}
                          onChange={(value) => setFrequencyByWeek(value)}
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
                  <Flex justify="space-between">
                    <Heading as="h3" size="sm">
                      Duration
                    </Heading>
                    <Flex flexDir="column" width="50%">
                      <Flex flexDir="row" gap="5" width="100%" justify="start">
                        <NumberInput
                          width="5rem"
                          min={1}
                          max={100}
                          focusBorderColor="teal.500"
                          value={duration}
                          onChange={(value) => setDuration(value)}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Select
                          placeholder="units"
                          width="6rem"
                          focusBorderColor="teal.500"
                          onChange={e => setDurationUnits(e.target.value)}
                        >
                          <option value="reps">reps</option>
                          <option value="seconds">seconds</option>
                          <option value="minutes">minutes</option>
                        </Select>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Heading as="h2" size="sm">
                  Add Additional Notes
                </Heading>
                <Textarea
                  focusBorderColor="teal.500"
                  placeholder="Provide additional instructions here."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </VStack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="outline" onClick={onClose}>
              Discard
            </Button>
            <Button colorScheme="teal" onClick={method}>{text}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignmentModal;
