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
  useToast,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createAccount } from '../../authCreateAccount';
import { useNavigate } from 'react-router-dom';

function CreateAccountModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();
  const toast = useToast();

  const createAccountHandler = async (email, password, firstName, lastName) => {
    if (!firstName || !email || !password || !lastName) {
      toast({
        title: 'Please include all fields.',
        status: 'error',
      });
      return;
    }
    let res = await createAccount(email, password);
    const uid = res.user.uid;
    console.log(uid);
    const user = {
      firstName,
      lastName,
      email,
      password,
      uid,
    };
    console.log(user);
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    console.log(res.user.email);
    navigate('/home');
  };

  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        size="lg"
        colorScheme="teal"
        _hover={{
          transition: 'ease',
          bgGradient: 'linear(to-l, cyan.700, green.500)',
          color: 'white',
        }}
      >
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
              <Input
                ref={initialRef}
                placeholder="First name"
                onChange={event => setFirstName(event.target.value)}
                value={firstName}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last name"
                onChange={event => setLastName(event.target.value)}
                value={lastName}
              />
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
                onClick={() =>
                  createAccountHandler(email, password, firstName, lastName)
                }
              >
                Create an account
              </Button>
              <Button colorScheme="teal" onClick={onClose}>
                Cancel
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateAccountModal;
