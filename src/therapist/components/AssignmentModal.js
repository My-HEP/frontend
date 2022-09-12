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
    Icon,
  } from '@chakra-ui/react'

import { IconPlus, IconEdit } from "@tabler/icons";

  const AssignmentModal = ({ type }) => {
    let text, heading;
    if(type === 'new'){
      heading = 'Assign New Exercise' 
      text = 'Assign Exercise'
    } else {
      heading = 'Edit Assigned Exercise'
      text = 'Update Exercise'
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
    {(type === 'new') ? (
       <Button
            leftIcon={<IconPlus />}
            variant='solid'
            colorScheme='teal'
            size='lg'
            minWidth='220px'
            onClick={onOpen}
          >
            Assign New Exercise
          </Button>
      ) : 
      
      (<Icon as={IconEdit} color="teal" cursor="pointer" onClick={onOpen} />)}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{ heading }</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={onClose}>
                Discard
              </Button>
              <Button variant='outline'>{text}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AssignmentModal; 