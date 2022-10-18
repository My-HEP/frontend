import {
  EditablePreview,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  FormLabel,
  Editable,
  Tooltip,
  EditableInput,
  Avatar,
  Stack,
  VStack,
  Flex,
  useColorModeValue,
  // Link as Hyperlink,
  // Alert,
  // AlertIcon,
  useDisclosure,
} from '@chakra-ui/react';
import {
  IconPhone,
  IconMail,
  // IconLock,
  IconPencil,
  IconUser,
} from '@tabler/icons';

const InfoForm = ({ type }) => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  // const resetPassword = getButtonProps();
  // const alert = getDisclosureProps();

  return (
    <VStack margin="1rem auto">
      <Stack spacing={4} width={['80%', '80%', '80%']}>
        <Editable spacing={[3, 3, 5]} marginLeft="2.5rem">
          <Flex justify="center" align="end">
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size="2xl"
            />
            <Tooltip label="Upload avatar">
              <FormLabel htmlFor="upload">
                <Input type="file" id="upload" hidden />
                <IconButton
                  as={IconPencil}
                  size="xs"
                  aria-label="edit content"
                  variant="ghost"
                  colorScheme="teal"
                />
              </FormLabel>
            </Tooltip>
          </Flex>
        </Editable>
        <Editable
          defaultValue={
            type === 'therapist' ? 'patient name' : 'therapist name'
          }
          isPreviewFocusable={true}
          display="flex"
        >
          <InputGroup>
            <Tooltip label="Click to edit">
              <EditablePreview
                marginLeft="2.5rem"
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue('gray.100', 'gray.700'),
                }}
              />
            </Tooltip>
            <InputLeftElement children={<IconUser />} />
            <Input type="text" as={EditableInput} focusBorderColor="teal.500" />
          </InputGroup>
        </Editable>
        <Editable
          defaultValue="primary number"
          isPreviewFocusable={true}
          display="flex"
        >
          <InputGroup>
            <Tooltip label="Click to edit">
              <EditablePreview
                marginLeft="2.5rem"
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue('gray.100', 'gray.700'),
                }}
              />
            </Tooltip>
            <InputLeftElement children={<IconPhone />} />
            <Input type="tel" as={EditableInput} focusBorderColor="teal.500" />
          </InputGroup>
        </Editable>
        <Editable defaultValue="email" isPreviewFocusable={true} display="flex">
          <InputGroup>
            <Tooltip label="Click to edit">
              <EditablePreview
                marginLeft="2.5rem"
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue('gray.100', 'gray.700'),
                }}
              />
            </Tooltip>
            <InputLeftElement children={<IconMail />} />
            <Input
              type="email"
              as={EditableInput}
              focusBorderColor="teal.500"
            />
          </InputGroup>
        </Editable>
        {/* {type === 'self' ? (
          <Editable
            defaultValue="password"
            isPreviewFocusable={true}
            display="flex"
          >
            <InputGroup>
              <Tooltip label="Click to edit">
                <EditablePreview
                  marginLeft="2.5rem"
                  py={2}
                  px={4}
                />
              </Tooltip>
              <InputLeftElement children={<IconLock />} />
              <Input
                type="password"
                as={EditableInput}
                focusBorderColor="teal.500"
              />
            </InputGroup>
          </Editable>
        ) : (
          <VStack align="start" paddingLeft="0.6rem" spacing={3}>
            <Tooltip label="Click to send password reset">
              <Flex>
                <IconLock color="teal" />
                <Hyperlink marginLeft="1.5rem" color="teal" {...resetPassword}>
                  Reset Patient Password
                </Hyperlink>
              </Flex>
            </Tooltip>
            <Alert status="success" colorScheme="teal" {...alert}>
              <AlertIcon />
              Password reset email sent.
            </Alert>
          </VStack>
        )} */}
      </Stack>
    </VStack>
  );
};

export default InfoForm;
