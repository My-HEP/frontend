import { useEffect, useState } from 'react';
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
  Image,
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

const AssignmentModal = ({
  assignmentData,
  type,
  patientId,
  setNewHEP,
  setUpdatedHEP,
  HEPs,
}) => {
  const [exerciseId, setExerciseId] = useState('');
  const [exercise, setExercise] = useState('');
  const [frequencyByDay, setFrequencyByDay] = useState();
  const [frequencyByWeek, setFrequencyByWeek] = useState('');
  const [duration, setDuration] = useState('');
  const [durationUnits, setDurationUnits] = useState('');
  const [notes, setNotes] = useState('');

  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    if (assignmentData) {
      setExerciseId(assignmentData.exerciseId);
      setExercise({
        url: assignmentData.exercise?.url,
        title: assignmentData.exercise?.title,
      });
      setFrequencyByDay(assignmentData.frequencyByDay);
      setFrequencyByWeek(assignmentData.frequencyByWeek);
      setDuration(assignmentData.duration);
      setDurationUnits(assignmentData.durationUnits);
      setNotes(assignmentData.notes);
    }
  }, [assignmentData]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const assignHEP = async () => {
    let assignedData = {
      exerciseId,
      patientId,
      frequencyByDay,
      frequencyByWeek,
      duration,
      durationUnits,
      notes,
      assignedById,
    };
    try {
      let response = await fetch(
        'http://localhost:3001/therapist/addHEPExercise',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(assignedData),
        }
      );
      if (response.ok) {
        setNewHEP(assignedData);
        onClose();
      }
    } catch (error) {}
  };

  const updateHEP = async () => {
    let updatedHEP = {
      exerciseId,
      patientId,
      frequencyByDay,
      frequencyByWeek,
      duration,
      durationUnits,
      notes,
      assignedById,
    };
    let update = 'update';
    let HEPToDisplay = {
      update,
      exerciseId,
      exercise,
      patientId,
      frequencyByDay,
      frequencyByWeek,
      duration,
      durationUnits,
      notes,
      assignedById,
    };
    try {
      let response = await fetch(
        'http://localhost:3001/therapist/updateHEPExercise',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedHEP),
        }
      );
      if (response.ok) {
        setUpdatedHEP(HEPToDisplay);
        onClose();
      }
    } catch (error) {}
  };

  const deleteAssignment = async () => {
    let update = 'delete';
    let assignmentToDelete = {
      update,
      patientId, 
      exerciseId
    }
    try {
      let response = await fetch(
        'http://localhost:3001/therapist/deleteHEPExercise',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(assignmentToDelete),
        }
      );
      if (response.ok) {
        setUpdatedHEP(assignmentToDelete);
        onClose();
      }
    } catch (error) {}
  }

  let assignedById = 6;

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
              {type === 'new' ? (
                <VStack
                  width={['100%', '100%', '48%']}
                  align="start"
                  spacing={5}
                >
                  <Heading as="h2" size="sm">
                    Select Existing Exercise
                  </Heading>
                  <SearchBar handleSearch={handleSearch} />
                  <ExerciseList
                    setSelectedExerciseId={setExerciseId}
                    selectedExerciseId={exerciseId}
                    setExercise={setExercise}
                    HEPs={HEPs}
                    searchTerm={searchTerm}
                  />
                </VStack>
              ) : (
                <VStack
                  width={['100%', '100%', '48%']}
                  align="start"
                  spacing={6}
                >
                  <Heading as="h3" size="md">
                    {assignmentData?.hepTitle}
                  </Heading>
                  <Image
                    src={assignmentData?.url}
                    boxSize="400px"
                    minWidth="200px"
                    objectFit="cover"
                  />
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
              )}
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
                    <Flex flexDir="column" align="end" gap="2" width="60%">
                      <Flex width="100%" justify="start" align="center" gap="5">
                        <NumberInput
                          width="5rem"
                          min={1}
                          max={100}
                          focusBorderColor="teal.500"
                          value={frequencyByDay}
                          onChange={value => setFrequencyByDay(value)}
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
                          onChange={value => setFrequencyByWeek(value)}
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
                    <Flex flexDir="column" width="60%">
                      <Flex flexDir="row" gap="5" width="100%" justify="start">
                        <NumberInput
                          width="6.5rem"
                          min={1}
                          max={100}
                          focusBorderColor="teal.500"
                          value={duration}
                          onChange={value => setDuration(value)}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                        <Select
                          placeholder="units"
                          width="8rem"
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
                  onChange={e => setNotes(e.target.value)}
                />
              </VStack>
            </Flex>
          </ModalBody>
          {type === 'new' ? (
            <ModalFooter>
              <Button mr={3} variant="outline" onClick={onClose}>
                Discard
              </Button>
              <Button colorScheme="teal" onClick={method}>
                {text}
              </Button>
            </ModalFooter>
          ) : (
            <ModalFooter flexWrap='wrap'>
              <Button backgroundColor="red.400" marginRight="auto" marginLeft={['auto', 0, 0]} minWidth="9rem" marginBottom={[10, 0, 0]}  onClick={deleteAssignment}>
                Remove Assignment
              </Button>
              <Flex marginRight={['auto', '0', '0']} marginLeft={['auto', '0', '0']}>
                  <Button mr={3} variant="outline" onClick={onClose} minWidth="6rem">
                    Cancel
                  </Button>
                  <Button colorScheme="teal" onClick={method} minWidth="9rem">
                    {text}
                  </Button>
                </Flex>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignmentModal;
