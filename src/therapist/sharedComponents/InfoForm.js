import { EditablePreview, Box, useColorModeValue, IconButton, Input, InputGroup, InputLeftElement, useDisclosure, useEditableControls, ButtonGroup, SlideFade, Editable, Tooltip, EditableInput, Stack } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
    VStack,
    Text,
    Icon, 
    Flex
  } from '@chakra-ui/react'
import { IconPhone, IconMail,  IconLock, IconPencil, IconEdit } from "@tabler/icons";

const InfoForm = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex align='center'>
        <IconButton size='xs' icon={<IconPencil />} aria-label='edit content' variant='outline' colorScheme='teal' {...getEditButtonProps()} />
      </Flex>
    )
  }

  return (
    <Stack spacing={4}>
      
        <Editable 
          defaultValue='primary number'
          isPreviewFocusable={false}
          display='flex'
          justifyContent='center'
          alignContent='center'
        >
          <InputGroup >
            <InputLeftElement children={<IconPhone/>}/> 
            <Input as={EditableInput} />
          </InputGroup>
          <EditablePreview /> 
          
          <EditableControls /> 
        </Editable>
      
      <Flex align="center">
        <IconMail marginRight="1rem" />
        <Editable 
          defaultValue='email'
          isPreviewFocusable={false}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Flex>
      <Flex align="center">
        <IconLock marginRight="1rem" />
        <Editable 
          defaultValue='password'
          isPreviewFocusable={false}>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Flex>
          
    </Stack>
  )
}
  
  // return (
  //   <VStack>
  //   <Editable defaultValue='Therapist Name'>
  //             <EditablePreview />
  //             <EditableInput />
  //           </Editable>
  //           <Text >Jane McTherapist</Text>
  //           <Flex>
  //             <Icon as={IconPhone} />
  //           </Flex>
  //           <Flex>
  //             <Icon as={IconMail} />
            
  //           </Flex>
  //           <Flex>
  //             <Icon as={IconLock} />
              
  //           </Flex>
  //           <Flex align="end">
  //             <Icon as={IconEdit} />
  //             <Text>Edit Information</Text>
  //           </Flex>
  //     </VStack>
      
  // )

export default InfoForm; 