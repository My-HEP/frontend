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
  FormLabel,
  Input,
  useDisclosure,
  useToast,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createAccount } from '../../authCreateAccount';
import {
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import FloatingFormControl from '../../shared/components/FloatingFormControl';
import { useNavigate } from 'react-router-dom';

function AddNewPatientModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const labelColor = useColorModeValue('white', 'gray.700');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();
  const toast = useToast();

  const formatPhoneNumber = phoneNumber => {
    if (phoneNumber !== undefined) {
      let stringNumber = phoneNumber.toString();
      return stringNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  };

  formatPhoneNumber(phoneNumber);

  // create user in db with add patient => auto generate an email that links to the create account page
  // => update user uid with firebase info in db - append uid to db

  const getEmailFromCreateUser = async (req, res) => {
    const user = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };

    const auth = getAuth();

    try {
      let response = await fetch('http://localhost:3001/therapist/addPatient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      let resetEmail = await sendPasswordResetEmail(auth, data.email);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewPatientHandler = async (
    email,
    firstName,
    lastName,
    phoneNumber
  ) => {
    if (!firstName || !email || !lastName || !password) {
      toast({
        title: 'Please include all fields.',
        status: 'error',
      });
      return;
    }
    getEmailFromCreateUser();
    // const user = {
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   email,
    //   password,
    // };

    // try {
    //   let response = await fetch('http://localhost:3001/therapist/addPatient', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    //   });
    //   console.log(response);
    //   // await sendPasswordResetEmail(response.uid, email);
    // } catch (error) {
    //   console.log(error);
    // }

    // navigate('/home');
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
        {props.button}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent padding="1.5rem">
          <ModalHeader>{props.heading}</ModalHeader>
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
              <FormLabel backgroundColor={labelColor}>First name</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                placeholder=" "
                type="text"
                focusBorderColor="teal.600"
                onChange={event => setLastName(event.target.value)}
                value={lastName}
              />
              <FormLabel backgroundColor={labelColor}>Last name</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                type="tel"
                placeholder=" "
                focusBorderColor="teal.600"
                onChange={event => setPhoneNumber(event.target.value)}
                value={phoneNumber}
              />
              <FormLabel backgroundColor={labelColor}>Phone number</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                type="email"
                placeholder=" "
                focusBorderColor="teal.600"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
              <FormLabel backgroundColor={labelColor}>Email address</FormLabel>
            </FloatingFormControl>

            <FloatingFormControl>
              <Input
                type="password"
                placeholder=" "
                focusBorderColor="teal.600"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
              <FormLabel backgroundColor={labelColor}>
                Temporary Password
              </FormLabel>
            </FloatingFormControl>
          </ModalBody>

          <ModalFooter>
            <Stack
              direction={['column', 'column', 'row']}
              justify="space-between"
              width="100%"
            >
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="teal"
                onClick={() =>
                  addNewPatientHandler(
                    email,
                    firstName,
                    lastName,
                    phoneNumber,
                    password
                  )
                }
              >
                {props.formButton}
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddNewPatientModal;
