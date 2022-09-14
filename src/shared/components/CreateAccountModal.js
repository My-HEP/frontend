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
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createAccount } from '../../authCreateAccount';
import { useNavigate } from 'react-router-dom';

function CreateAccountModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();

  const createAccountHandler = async (email, password) => {
    let res = await createAccount(email, password);
    console.log(res.user.email);
    navigate('/therapisthome');
  };

  return (
    <>
      <Button onClick={onOpen} variant="outline" size="lg" colorScheme="teal">
        Create an account
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent padding="1.5rem">
          <ModalHeader>Create a new account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email address"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Stack
              direction={['column', 'column', 'row']}
              justify="space-between"
              width="100%"
            >
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={() => createAccountHandler(email, password)}
              >
                Create an account
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateAccountModal;
