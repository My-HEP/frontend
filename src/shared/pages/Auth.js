import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Heading,
  Button,
  Icon,
} from '@chakra-ui/react';
import { logoIcon } from '../../therapist/sharedComponents/LogoIcon';
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
    navigate('/therapisthome');
  };

  return (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      align="center"
      padding="3rem"
    >
      <Flex width="100%" maxWidth="30rem" marginBottom="3rem">
        <Icon as={logoIcon} boxSize="3.75rem" />
        <Heading marginLeft="2rem" alignSelf="flex-end">
          Welcome to My HEP
        </Heading>
      </Flex>
      <Flex
        direction="column"
        width="100%"
        maxWidth={['none', 'none', '30rem']}
        padding={['none', 'none', '4rem']}
        rounded="md"
        border={['none', 'none', '1px']}
        borderColor="gray.300"
        boxShadow="xl"
      >
        <Heading marginTop="1.5rem" marginBottom="2rem">
          Sign in
        </Heading>
        <Stack spacing={10} maxWidth="23rem" paddingBottom="3rem">
          <InputGroup>
            <InputLeftElement children={<IconMail />} />
            <Input
              type="email"
              placeholder="Email"
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement children={<IconLock />} />
            <Input
              type="password"
              placeholder="Password"
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
              onClick={() => signInHandler(email, password)}
            >
              Sign in
            </Button>
            <CreateAccountModal email={email} password={password} />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Auth;
