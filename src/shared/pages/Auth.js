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
} from '@chakra-ui/react';
import { IconMail, IconLock } from '@tabler/icons';
import { useState } from 'react';
import CreateAccountModal from '../components/CreateAccountModal';
import { signIn } from '../../authSignIn';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    } else if (authCode === 'auth/internal-error'){
      errorMessage =
        "Please provide a valid password.";
    } else {
      errorMessage =
        "We're sorry but something went wrong. Please try again later.";
    }

    if (!authCode) {
      navigate('/home');
      return;
    } else {
      toast({
        title: errorMessage,
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
      });
      return;
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

          <Heading marginTop="1.5rem" marginBottom="2rem" fontSize="1.5rem">
            Sign in
          </Heading>
          <Stack spacing={10} maxWidth="23rem" paddingBottom="3rem">
            <InputGroup>
              <InputLeftElement children={<IconMail />} />
              <Input
                type="email"
                placeholder="Email"
                focusBorderColor="teal.600"
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement children={<IconLock />} />
              <Input
                type="password"
                placeholder="Password"
                focusBorderColor="teal.600"
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </InputGroup>
            <Stack direction="column" justify="space-between">
              <Button
                colorScheme="teal"
                width="100%"
                variant="solid"
                size="lg"
                onClick={() => signInHandler(email, password)}
              >
                Sign in
              </Button>
              <CreateAccountModal email={email} password={password} />
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
