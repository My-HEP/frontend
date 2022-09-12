import React from "react";
import {
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
    Flex,
    Text,
  } from '@chakra-ui/react'

import { IconSettings } from "@tabler/icons";
import InfoForm from "./EditInfoForm";

const EditModal = ({ type }) => {
    let text, heading;
    if(type === 'therapist'){
      text = 'Edit Patient Information'
      heading = 'Edit Patient Information'
    } else {
      text= 'Edit Information'
      heading = 'Edit Your Information'
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <HyperLink color='teal'>
            <Flex minWidth='175px' gap='2'>
                <IconSettings /> 
                <Text onClick={onOpen}>{text}</Text>
            </Flex>
        </HyperLink>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{ heading }</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <InfoForm type={type} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='outline'>Save Updates</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditModal; 