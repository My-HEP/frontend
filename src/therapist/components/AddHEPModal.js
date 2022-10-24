import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  useDisclosure,
  Tooltip,
  FormLabel,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { IconPlus, IconFileUpload } from '@tabler/icons';

function AddHEPModal() {
  const [title, setTitle] = useState('');
  const [tagsStr, setTagsStr] = useState(['']);
  const [url, setUrl] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const addExerciseHandler = async (url, title, tagsStr) => {
    try {
      const tagsArr = tagsStr.split(', ');
      const tags = tagsArr.map(tag => ({ title: tag }));
      console.log(tags);
      const exercise = { url, title, tags };
      console.log(exercise);
      const response = await fetch(
        'http://localhost:3001/therapist/addExercise',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(exercise),
        }
      );
      window.location.reload();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        variant="solid"
        leftIcon={<IconPlus />}
        size="lg"
        colorScheme="teal"
        marginLeft={['0', '0', '2rem']}
        padding="1rem 2rem 1rem 2rem"
        minWidth="13rem"
      >
        Add New Exercise
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Exercise to Library</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tooltip label="Select exercise to upload">
              <FormLabel
                display="flex"
                minWidth="300px"
                justifyContent="center"
                htmlFor="add-exercise"
                padding="3rem 2rem"
                border="1px"
                borderColor="lightgray"
                borderRadius="7"
              >
                <Input type="file" id="add-exercise" hidden />
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

            <InputGroup justifyContent="center" marginBottom="2rem">
              <VStack display="flex" maxWidth="100%" spacing={2}>
                <Input
                  variant="outline"
                  minWidth="300px"
                  width="100%"
                  placeholder="Exercise URL"
                  focusBorderColor="teal.500"
                  value={url}
                  onChange={event => setUrl(event.target.value)}
                />
                <Input
                  variant="outline"
                  minWidth="300px"
                  placeholder="Exercise Title"
                  focusBorderColor="teal.500"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
                <Input
                  variant="outline"
                  minWidth="300px"
                  placeholder="Tags"
                  focusBorderColor="teal.500"
                  value={tagsStr}
                  onChange={event => setTagsStr(event.target.value)}
                />
              </VStack>
            </InputGroup>

            {
              // @TODO add dropdown select for tags //
              // @TODO tags added as chakra-ui Tag component
            }
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button
              onClick={() => addExerciseHandler(url, title, tagsStr)}
              colorScheme="teal"
              ml={3}
            >
              Add to Library
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddHEPModal;
