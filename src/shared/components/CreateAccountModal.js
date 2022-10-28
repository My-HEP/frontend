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
  useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { createAccount } from '../../authCreateAccount';
import FloatingFormControl from './FloatingFormControl';
import { useNavigate } from 'react-router-dom';

function CreateAccountModal() {
  const [formError, setFormError] = useState('true');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const labelColor = useColorModeValue('white', 'gray.700');
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const navigate = useNavigate();
  const emailRegex =/^[a-zA-Z0-9.!#$%&�*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
  const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  useEffect(() => {
    firstNameError ||
    firstNameError === '' ||
    lastNameError ||
    lastNameError === '' ||
    phoneNumberError ||
    phoneNumberError === '' ||
    emailError ||
    emailError === '' ||
    passwordError ||
    passwordError === '' ||
    verifyPasswordError ||
    verifyPasswordError === ''
      ? setFormError(true)
      : setFormError(false);
  }, [
    firstNameError,
    lastNameError,
    phoneNumberError,
    emailError,
    passwordError,
    verifyPasswordError,
    formError,
  ]);

  // Validate fields
  const validateInput = e => {
    const name = e.target.name;
    if (name === 'firstName') {
      firstName === '' ? setFirstNameError(true) : setFirstNameError(false);
    }
    if (name === 'lastName') {
      lastName === '' ? setLastNameError(true) : setLastNameError(false);
    }
    if (name === 'phoneNumber') {
      phoneNumber === ''
        ? setPhoneNumberError(true)
        : setPhoneNumberError(false);
      phoneNumber.match(phoneRegex)
        ? setPhoneNumberError(false)
        : setPhoneNumberError(true);
    }
    if (name === 'email') {
      email === '' ? setEmailError(true) : setEmailError(false);
      email.match(emailRegex) ? setEmailError(false) : setEmailError(true);
    }
    if (name === 'password') {
      password.length < 6 ? setPasswordError(true) : setPasswordError(false);
    }

    if (name === 'verifyPassword') {
      password !== verifyPassword
        ? setVerifyPasswordError(true)
        : setVerifyPasswordError(false);
    }
  };

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'lastName') {
      setLastName(value);
    }
    if (name === 'phoneNumber') {
      setPhoneNumber(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'verifyPassword') {
      setVerifyPassword(value);
    }
  };

  const validateFormValues = () => {
    firstName === '' ? setFirstNameError(true) : setFirstNameError(false);
    lastName === '' ? setLastNameError(true) : setLastNameError(false);
    phoneNumber === '' ? setPhoneNumberError(true) : setPhoneNumberError(false);
    phoneNumber.match(phoneRegex)
    ? setPhoneNumberError(false)
    : setPhoneNumberError(true);
    email === '' ? setEmailError(true) : setEmailError(false);
    email.match(emailRegex) ? setEmailError(false) : setEmailError(true);
    password === '' ? setPasswordError(true) : setPasswordError(false);
    password.length < 6 ? setPasswordError(true) : setPasswordError(false);
    verifyPassword === ''
      ? setVerifyPasswordError(true)
      : setVerifyPasswordError(false);
    password !== verifyPassword
    ? setVerifyPasswordError(true)
    : setVerifyPasswordError(false);
    console.log(firstNameError, formError)
    createAccountHandler();
  };

  const handleClose = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setVerifyPassword('');
    setFirstNameError('');
    setLastNameError('');
    setPhoneNumberError('');
    setEmailError('');
    setPasswordError('');
    setVerifyPasswordError('');
    onClose();
  };

  const toast = useToast();

  const createAccountHandler = async () => {
    console.log(formError)
    if (!formError) {
      // Save user to database
      let res = await createAccount(email, password);
      let authCode = res.code;
      let errorMessage;
      if (authCode === 'auth/invalid-email') {
        errorMessage = 'Please provide a valid email';
      } else if (authCode === 'auth/email-already-in-use') {
        errorMessage = 'This email is already in use. Please log in instead.';
      } else if (authCode === 'auth/weak-password') {
        errorMessage = 'Password must be at least 6 characters in length.';
      } else if (authCode) {
        errorMessage =
          "We're sorry but something went wrong. Please try again later.";
      }

      if (!authCode) {
        const uid = res.user.uid;
        const user = {
          firstName,
          lastName,
          phoneNumber,
          email,
          uid,
        };
        await fetch('http://localhost:3001/createUserAccount', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        navigate('/home');
        return;
      } else {
        toast({
          title: errorMessage,
          status: 'error',
          isClosable: true,
          position: 'bottom-center',
        });
        return;
      }
    } else {
      return;
    }
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
        Create a new account
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent padding="1rem">
          <ModalHeader>Sign up with your email</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <FloatingFormControl>
              <FormControl isInvalid={firstNameError}>
                <Input
                  placeholder=" "
                  type="text"
                  focusBorderColor="teal.600"
                  name="firstName"
                  onChange={handleInput}
                  onBlur={validateInput}
                  value={firstName}
                />
                <FormLabel backgroundColor={labelColor}>First name</FormLabel>
                {!firstNameError ? (
                  <></>
                ) : (
                  <FormErrorMessage>First name is required.</FormErrorMessage>
                )}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={lastNameError}>
                <Input
                  placeholder=" "
                  type="text"
                  focusBorderColor="teal.600"
                  name="lastName"
                  onChange={handleInput}
                  onBlur={validateInput}
                  value={lastName}
                />
                <FormLabel backgroundColor={labelColor}>Last name</FormLabel>
                {!lastNameError ? (
                  <></>
                ) : (
                  <FormErrorMessage>Last name is required.</FormErrorMessage>
                )}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={phoneNumberError}>
                <Input
                  type="tel"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  name="phoneNumber"
                  onChange={handleInput}
                  onBlur={validateInput}
                  value={phoneNumber}
                />
                <FormLabel backgroundColor={labelColor}>Phone number</FormLabel>
                {!phoneNumberError ? (
                  <></>
                ) : (
                  <FormErrorMessage>
                    A valid phone number is required.
                  </FormErrorMessage>
                )}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={emailError}>
                <Input
                  type="email"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  name="email"
                  onChange={handleInput}
                  onBlur={validateInput}
                  value={email}
                />
                <FormLabel backgroundColor={labelColor}>
                  Email address
                </FormLabel>
                {!emailError ? (
                  <></>
                ) : (
                  <FormErrorMessage>
                    A valid email is required.
                  </FormErrorMessage>
                )}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={passwordError}>
                <Input
                  type="password"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  name="password"
                  onChange={handleInput}
                  onBlur={validateInput}
                  value={password}
                />
                <FormLabel backgroundColor={labelColor}>Password</FormLabel>
                {!passwordError ? (
                  <FormHelperText>
                    Passwords must be at least 6 characters in length.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Password of at least 6 characters is required.
                  </FormErrorMessage>
                )}
              </FormControl>
            </FloatingFormControl>

            <FloatingFormControl>
              <FormControl isInvalid={verifyPasswordError}>
                <Input
                  type="password"
                  placeholder=" "
                  focusBorderColor="teal.600"
                  name="verifyPassword"
                  onChange={handleInput}
                  onBlur={validateInput}
                  value={verifyPassword}
                />
                <FormLabel backgroundColor={labelColor}>
                  Confirm Password
                </FormLabel>
                {!verifyPasswordError ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage>Passwords must match.</FormErrorMessage>
                )}
              </FormControl>
            </FloatingFormControl>
          </ModalBody>

          <ModalFooter>
            <Stack
              direction={['column', 'column', 'row']}
              justify="space-between"
              width="100%"
            >
              
              <Button colorScheme="teal" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                colorScheme="teal"
                onClick={validateFormValues}
              >
                Create account
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateAccountModal;
