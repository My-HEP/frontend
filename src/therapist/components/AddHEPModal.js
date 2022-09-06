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
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { IconPlus } from '@tabler/icons';

function AddHEPModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        leftIcon={<IconPlus />}
        size="lg"
        bg="#2C7A7B"
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
          <ModalHeader>Upload a new HEP</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>Choose a file to upload</FormLabel> */}
              <Input type="file" placeholder="File" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Upload
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddHEPModal;
