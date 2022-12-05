import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Heading,
  Button,
  Text,
  Image,
  useColorModeValue,
  useToast,
  Link,
} from '@chakra-ui/react';
import { IconMail, IconLock } from '@tabler/icons';
import { useEffect, useState } from 'react';
import CreateAccountModal from '../components/CreateAccountModal';
import { signIn } from '../../authSignIn';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useFirebaseAuth } from '../../context/FirebaseAuthContext';

function Auth() {
  const { userRole, loading: loadingUserRole } = useFirebaseAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  console.log(auth);
  const navigate = useNavigate();

  const headingColorMobile = useColorModeValue(
    'linear(to-l, cyan.600, green.500)',
    'linear(to-l, cyan.200, green.200)'
  );
  const headingColorDesktop = useColorModeValue(
    'linear(to-l, teal.700, teal.900)',
    'linear(to-l, gray.100, gray.50)'
  );

  const toast = useToast();

  useEffect(() => {
    console.log('on auth', userRole);
    const formattedUserRole = userRole?.toLowerCase();
    if (userRole && !loadingUserRole) {
      navigate(`/${formattedUserRole}/home`);
    }
  }, [loadingUserRole, userRole]);

  const signInHandler = async (email, password) => {
    let authRes = await signIn(email, password);
    let authCode = authRes.code;
    let errorMessage;
    if (authCode === 'auth/invalid-email') {
      errorMessage = 'Please provide a valid email';
    } else if (authCode === 'auth/user-not-found') {
      errorMessage =
        'A user with this email address does not exist. Please create an account.';
    } else if (authCode === 'auth/wrong-password') {
      errorMessage = 'The provided password is incorrect. Please try again.';
    } else if (authCode === 'auth/too-many-requests') {
      errorMessage =
        'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
    } else if (authCode === 'auth/internal-error') {
      errorMessage = 'Please provide a valid password.';
    } else {
      errorMessage =
        "We're sorry but something went wrong. Please try again later.";
    }

    if (authCode) {
      toast({
        title: errorMessage,
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
      });
      return;
    }
  };

  const forgotPasswordHandler = () => {
    const auth = getAuth();
    try {
      if (email) {
        sendPasswordResetEmail(auth, email);
        toast({
          title: 'Password reset email sent.',
          status: 'success',
          isClosable: true,
          position: 'bottom-left',
        });
      } else {
        toast({
          title: 'Please input a valid email.',
          status: 'error',
          isClosable: true,
          position: 'bottom-left',
        });
      }
    } catch (error) {
      toast({
        title: 'Error sending password reset email. Please try again later.',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };

  return (
    <Flex
      direction="row"
      width="100%"
      height="100vh"
      align="center"
      justify="center"
      overflow="hidden"
    >
      <Flex
        direction="column"
        width={['auto', 'auto', '45%']}
        height="100vh"
        align="center"
        padding={['.5rem', '.5rem', '3rem']}
        marginTop="6rem"
      >
        <Flex
          direction="column"
          width="auto"
          maxWidth={['none', 'none', '30rem']}
          minWidth={['none', 'none', '400px']}
          margin="1rem"
        >
          <Flex
            width="auto"
            maxWidth="30rem"
            direction="column"
            marginBottom="2rem"
          >
            <Text
              bgGradient={[
                headingColorMobile,
                headingColorMobile,
                headingColorMobile,
                headingColorDesktop,
              ]}
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Welcome to
            </Text>
            <Text
              bgGradient={[
                headingColorMobile,
                headingColorMobile,
                headingColorMobile,
                headingColorDesktop,
              ]}
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              MyHEP
            </Text>
          </Flex>

          <Heading marginTop="2rem" marginBottom="1.5rem" fontSize="1.5rem">
            Sign in
          </Heading>
          <Stack spacing={3} maxWidth="23rem" paddingBottom="3rem">
            <InputGroup marginTop="0" marginBottom="1rem">
              <InputLeftElement children={<IconMail />} />
              <Input
                type="email"
                placeholder="Email"
                focusBorderColor="teal.600"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </InputGroup>

            <InputGroup marginTop="0" marginBottom="1rem">
              <InputLeftElement children={<IconLock />} />
              <Input
                type="password"
                placeholder="Password"
                focusBorderColor="teal.600"
                onChange={event => setPassword(event.target.value)}
                value={password}
                marginBottom="0rem"
              />
            </InputGroup>
            <Link onClick={() => forgotPasswordHandler()}>
              Forgot password?
            </Link>
            <Stack direction="column" justify="space-between">
              <Button
                colorScheme="teal"
                width="100%"
                marginTop="1.75rem"
                marginBottom=".75rem"
                variant="solid"
                size="lg"
                onClick={() => signInHandler(email, password)}
              >
                Sign in
              </Button>
              <CreateAccountModal />
            </Stack>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        width={['auto', 'auto', '55%']}
        height="100%"
        bgGradient="linear(to-b, cyan.800, green.400)"
        display={['none', 'none', 'none', 'flex']}
        overflow="hidden"
      >
        <Image
          objectFit="cover"
          opacity="0.4"
          minWidth="50rem"
          position="relative"
          top="0"
          right="0"
          bottom="0"
          src="https://images.unsplash.com/photo-1586439496903-c96e9f18f212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
        ></Image>
      </Flex>
    </Flex>
  );
}

export default Auth;
