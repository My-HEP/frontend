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
} from '@chakra-ui/react';

import { IconPlus, IconEdit } from '@tabler/icons';
import SearchBar from './SearchBar';

const AssignmentModal = ({ type }) => {
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
            <Flex justify='space-between'>
              <VStack
                width='48%'
                align='start'
              >
                <Heading
                  as='h2'
                  size='sm'
                >
                  Select Existing Exercise
                </Heading>
                <SearchBar />
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
                border='2px'
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
                >
                  <Heading
                    as='h3'
                    size='xs'
                  >
                    Frequency
                  </Heading>
                  <Flex
                    flexDir='column'
                    align='end'
                    border='2px'
                  >
                    <Flex
                      align='center'
                      justify='end'
                    >
                      <Input
                        type='number'
                        min='0'
                        max='100'
                      />
                      <Text>times/day</Text>
                    </Flex>
                    <Flex
                      align='center'
                      justify='end'
                    >
                      <Input
                        type='number'
                        min='0'
                        max='7'
                      />
                      <Text>days/week</Text>
                    </Flex>
                  </Flex>
                  <Heading
                    as='h3'
                    size='xs'
                  >
                    Duration
                  </Heading>
                  <Flex
                    flexDir='column'
                    align='end'
                  >
                    <Flex flexDir='column'>
                      <Input
                        type='number'
                        min='0'
                        max='100'
                      />
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
