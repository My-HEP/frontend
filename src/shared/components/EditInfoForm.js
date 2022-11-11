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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link as HyperLink,
  Text,
} from '@chakra-ui/react';
import { IconPhone, IconMail, IconPencil, IconUser } from '@tabler/icons';
import { IconSettings } from '@tabler/icons';
import { useState, useEffect } from 'react';

const EditInfoForm = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentUserData, setCurrentUserData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const updateDataHandler = async (
    uid,
    firstName,
    lastName,
    phoneNumber,
    email
  ) => {
    const updatedUser = {
      uid,
      firstName,
      lastName,
      phoneNumber,
      email,
    };
    try {
      const response = await fetch('http://localhost:3001/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  let text, heading;
  if (props.type === 'therapist') {
    text = 'Edit Patient Information';
    heading = 'Edit Patient Information';
  } else {
    text = 'Edit Information';
    heading = 'Edit Your Information';
  }

  return (
    <>
      <HyperLink color="teal">
        <Flex minWidth="175px" gap="2">
          <IconSettings />
          <Text onClick={onOpen}>{text}</Text>
        </Flex>
      </HyperLink>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack margin="1rem auto">
              <Stack spacing={4} width={['80%', '80%', '80%']}>
                <Editable spacing={[3, 3, 5]} marginLeft="2.5rem">
                  <Flex justify="center" align="end">
                    <Avatar
                      name={props.name}
                      src={currentUserData.avatar}
                      size="2xl"
                    />
                    <Tooltip label="Update avatar">
                      <FormLabel htmlFor="upload">
                        <IconButton
                          as={IconPencil}
                          size="xs"
                          aria-label="edit content"
                          variant="ghost"
                          colorScheme="teal"
                          onClick={() => setIsHidden(!isHidden)}
                        />
                      </FormLabel>
                    </Tooltip>
                  </Flex>
                </Editable>
                <Input
                  type="text"
                  id="upload"
                  marginTop="1rem"
                  width="90%"
                  alignSelf="center"
                  focusBorderColor="teal.500"
                  display="inline"
                  onChange={event => setAvatar(event.target.value)}
                  value={avatar}
                  hidden={isHidden}
                />
                <Editable
                  defaultValue={props.currentFirstName}
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
                    <Input
                      type="text"
                      as={EditableInput}
                      focusBorderColor="teal.500"
                      onChange={event => setFirstName(event.target.value)}
                      value={firstName}
                    />
                  </InputGroup>
                </Editable>
                <Editable
                  defaultValue={props.currentLastName}
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
                    <Input
                      type="text"
                      as={EditableInput}
                      focusBorderColor="teal.500"
                      onChange={event => setLastName(event.target.value)}
                      value={lastName}
                    />
                  </InputGroup>
                </Editable>
                <Editable
                  defaultValue={props.currentPhone}
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
                    <Input
                      type="text"
                      as={EditableInput}
                      focusBorderColor="teal.500"
                      onChange={event => setPhoneNumber(event.target.value)}
                      value={phoneNumber}
                    />
                  </InputGroup>
                </Editable>
                <Editable
                  defaultValue={props.currentEmail}
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
                    <InputLeftElement children={<IconMail />} />
                    <Input
                      type="email"
                      as={EditableInput}
                      focusBorderColor="teal.500"
                      onChange={event => setEmail(event.target.value)}
                      value={email}
                    />
                  </InputGroup>
                </Editable>
              </Stack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() =>
                updateDataHandler(
                  props.patientId,
                  firstName,
                  lastName,
                  phoneNumber,
                  email
                )
              }
              colorScheme="teal"
            >
              Save Updates
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditInfoForm;
