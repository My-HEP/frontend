import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Heading,
  Button,
  Icon,
  Text,
  Image,
} from '@chakra-ui/react';
import { logoIcon } from '../../shared/components/LogoIcon';
import { IconMail, IconLock } from '@tabler/icons';
import { useState } from 'react';
import CreateAccountModal from '../components/CreateAccountModal';
import { signIn } from '../../authSignIn';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signInHandler = async (email, password) => {
    let res = await signIn(email, password);
    console.log(res.user.email);
    navigate('/home');
    console.log(res);
  };

  return (
    <Flex
      direction="row"
      width="100%"
      height="100vh"
      align="center"
      justify="center"
      overflow="hidden"
      // padding="3rem"
    >
      <Flex
        direction="column"
        width={['auto', 'auto', '45%']}
        height="100vh"
        align="center"
        // justify="center"
        padding={['.5rem', '.5rem', '3rem']}
        marginTop="6rem"
      >
        <Flex
          direction="column"
          width="auto"
          height="auto"
          maxWidth={['none', 'none', '30rem']}
          minWidth={['none', 'none', '400px']}
          margin="1rem"
          // marginLeft={['6%', '6%', '6%']}
        >
          <Flex width="auto" maxWidth="30rem" marginBottom="2rem">
            {/* <Icon as={logoIcon} boxSize="5rem" /> */}
            {/* <Heading
              // marginLeft="1rem"
              alignSelf="flex-end"
              marginBottom="0.75rem"
              size="xl"
            >
              Welcome to My HEP
            </Heading> */}
            <Text
              bgGradient={[
                'linear(to-l, cyan.600, green.500)',
                'linear(to-l, cyan.600, green.500)',
                'linear(to-l, cyan.600, green.500)',
                'linear(to-l, teal.700, teal.900)',
              ]}
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Welcome to My HEP
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
            <Stack
              direction={['column', 'column', 'row']}
              justify="space-between"
            >
              <Button
                colorScheme="teal"
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
          // overflow="hidden"
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
