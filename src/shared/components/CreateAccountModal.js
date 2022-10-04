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
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { createAccount } from '../../authCreateAccount';
import FloatingFormControl from './FloatingFormControl';
import { useNavigate } from 'react-router-dom';

function CreateAccountModal() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');


  const { isOpen, onOpen, onClose } = useDisclosure();

  const labelColor = useColorModeValue('white', 'gray.700');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();

  // Validate fields
  const validateFormValues = (formValues) => {
    console.log(formValues)
    if(email === ""){
      setEmailError(true)
    }
    if ( firstName === ""){
      setFirstNameError(true)
    }
    if (lastName === ""){
      setLastNameError(true)
    }
    if (phoneNumber === ""){
      setPhoneNumberError(true)
    }
    if (password === ""){
      setPasswordError(true)
      setVerifyPasswordError(true)
    }
    if (phoneNumber === ""){
      setPhoneNumberError(true)
    } else {
      if(password !== verifyPassword) {
        setVerifyPasswordError(true);
       } 
    }

  }


  const createAccountHandler = async ({...formValues}) => {
    validateFormValues(formValues)
   
    // Save user to database
    let res = await createAccount(email, password);
    const uid = res.user.uid;
    console.log(uid);
    const user = {
      firstName,
      lastName,
      phoneNumber,
      email,
      uid,
    };
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    console.log(res);
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
        <ModalContent padding="1rem">
          <ModalHeader>Sign up with your email</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <FloatingFormControl>
            <FormControl isInvalid={firstNameError}> 
              <Input
                ref={initialRef}
                placeholder=" "
                type="text"
                focusBorderColor="teal.600"
                onChange={event => setFirstName(event.target.value)}
                value={firstName}
              />
              <FormLabel backgroundColor={labelColor}>First name</FormLabel>
              {!firstNameError ? <></> : <FormErrorMessage>First name is required.</FormErrorMessage>}
            </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={lastNameError}>
                <Input
                  placeholder=" "
                  type="text"
                  focusBorderColor="teal.600"
                  onChange={event => setLastName(event.target.value)}
                  value={lastName}
                />
                <FormLabel backgroundColor={labelColor}>Last name</FormLabel>
                {!lastNameError ? <></> : <FormErrorMessage>Last name is required.</FormErrorMessage>}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={phoneNumberError}>
                <Input
                  type="tel"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  onChange={event => setPhoneNumber(event.target.value)}
                  value={phoneNumber}
                />
                <FormLabel backgroundColor={labelColor}>Phone number</FormLabel>
              {!phoneNumberError ? <></> : <FormErrorMessage>Phone number is required.</FormErrorMessage>}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={emailError}>
                <Input
                  type="email"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                />
                <FormLabel backgroundColor={labelColor}>Email address</FormLabel>
              {!emailError ? <></> : <FormErrorMessage>Email is required.</FormErrorMessage>}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={passwordError}>
                <Input
                  type="password"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                />
                <FormLabel backgroundColor={labelColor}>Password</FormLabel>
                {!passwordError ? <FormHelperText>Passwords must be at least 6 characters in length.</FormHelperText>  : <FormErrorMessage>Password of at least 6 characters is required.</FormErrorMessage>}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={verifyPasswordError}>
                <Input
                  type="password"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  onChange={event => setVerifyPassword(event.target.value)}
                  value={verifyPassword}
                />
                <FormLabel backgroundColor={labelColor}>Confirm Password</FormLabel>
              {!verifyPasswordError ? <FormHelperText></FormHelperText>  : <FormErrorMessage>Passwords must match.</FormErrorMessage>}
              </FormControl>
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
                  createAccountHandler({email, password, verifyPassword, firstName, lastName})
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
