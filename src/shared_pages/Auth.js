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
import { logoIcon } from '../therapist/sharedComponents/LogoIcon';
import { IconMail, IconLock } from '@tabler/icons';

function Auth() {
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
            <Input type="email" placeholder="Email" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement children={<IconLock />} />
            <Input type="password" placeholder="Password" />
          </InputGroup>
          <Stack
            direction={['column', 'column', 'row']}
            justify="space-between"
          >
            <Button colorScheme="teal" variant="solid">
              Sign in
            </Button>
            <Button colorScheme="teal" variant="outline">
              Create an account
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Auth;
