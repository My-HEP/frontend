import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Flex,
  Image,
  Tooltip,
} from '@chakra-ui/react';

import {
  IconZoomCode
} from '@tabler/icons';

const ViewHEPModal = ({url, hepTitle}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Flex 
        onClick={onOpen} 
        cursor="pointer" 
        align="flex-end"
        position="relative"
    >
        <Image
            src={url}
            boxSize='400px'
            minWidth='200px'
            height='250px'
            objectFit='cover'
        />
        <Icon as={IconZoomCode} color="white" fontSize={38} position="absolute" right="0" bottom="0" background="teal" padding={1}/>
    </Flex>
    

      
      <Modal size={['sm', 'lg', 'xl']} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{hepTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
                src={url}
                boxSize='400px'
                width='100%'
                height='auto'
                objectFit='cover'
                marginBottom='8'
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewHEPModal;
