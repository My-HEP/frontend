import React from 'react';
import {
  Flex,
  Text,
  Button,
  ButtonGroup,
  Link as HyperLink,
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { IconLogout } from '@tabler/icons';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

// popup confirmation controls
function Confirmation() {
  const navigate = useNavigate();
  const auth = getAuth();
  const toast = useToast();
  const signOutHandler = () => {
    signOut(auth)
      .then(navigate('/'))
      .then(
        toast({
          description: 'You have successfully logged out of your account.',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
      );
  };

  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <HyperLink color="teal" onClick={onToggle}>
          <Flex minWidth="175px" gap="2">
            <IconLogout />
            <Text>Log out</Text>
          </Flex>
        </HyperLink>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Are you sure you want to log out?</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={() => signOutHandler()}>
                Confirm
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default Confirmation;
