import React from "react";
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
    useDisclosure
  } from '@chakra-ui/react';
import {  IconLogout } from "@tabler/icons";

// popup confirmation controls
function Confirmation () {   
    const { isOpen, onToggle, onClose } = useDisclosure()
    return (
        <Popover
            returnFocusOnClose={false}
            isOpen={isOpen}
            onClose={onClose}
            placement='bottom'
            closeOnBlur={false}
            >
            <PopoverTrigger>
                <HyperLink color='teal' onClick={onToggle}>
                <Flex minWidth='175px' gap='2'>
                    <IconLogout /> 
                    <Text>Log out</Text>
                </Flex>
                </HyperLink>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    Are you sure you want to log out?
                </PopoverBody>
                <PopoverFooter display='flex' justifyContent='flex-end'>
                    <ButtonGroup size='sm'>
                    <Button variant='outline' onClick={onClose}>Cancel</Button>
                    <Button colorScheme='teal'>Confirm</Button>
                    </ButtonGroup>
                </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )

}

export default Confirmation;