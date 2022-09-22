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
import FloatingFormControl from './FloatingFormControl';
import { useNavigate } from 'react-router-dom';

function CreateAccountModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
          <ModalHeader>Sign up with your email</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FloatingFormControl>
              <Input
                ref={initialRef}
                placeholder=" "
                type="text"
                focusBorderColor="teal.600"
                onChange={event => setFirstName(event.target.value)}
                value={firstName}
              />
              <FormLabel>First name</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                placeholder=" "
                type="text"
                focusBorderColor="teal.600"
                onChange={event => setLastName(event.target.value)}
                value={lastName}
              />
              <FormLabel>Last name</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                type="tel"
                placeholder=" "
                focusBorderColor="teal.600"
                onChange={event => setPhoneNumber(event.target.value)}
                value={phoneNumber}
              />
              <FormLabel>Phone number</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                type="email"
                placeholder=" "
                focusBorderColor="teal.600"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
              <FormLabel>Email address</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                type="password"
                placeholder=" "
                focusBorderColor="teal.600"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
              <FormLabel>Password</FormLabel>
            </FloatingFormControl>
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
