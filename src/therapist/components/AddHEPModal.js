import React from 'react';
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
  useDisclosure,
  Tooltip,
  FormLabel,
  IconButton,
} from '@chakra-ui/react';
import { IconPlus, IconFileUpload } from '@tabler/icons';

function AddHEPModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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
        minWidth="12rem"
      >
        Add New HEP
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Exercise to Library</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tooltip label="Select exercise to upload">
              <FormLabel
                display="flex"
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Add to Library
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddHEPModal;
