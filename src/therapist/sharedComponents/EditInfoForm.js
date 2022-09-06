import { 
  EditablePreview, 
  IconButton, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  useEditableControls, 
  ButtonGroup, 
  Editable, 
  Tooltip, 
  EditableInput, 
  Avatar,
  Stack, 
  VStack
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { IconPhone, IconMail,  IconLock, IconPencil, IconUser } from "@tabler/icons";

const InfoForm = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup alignItems='center' justifyContent='center' size='sm'>
        <IconButton colorScheme='teal' variant='ghost' aria-label='confirm changes' icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton colorScheme='teal' variant='ghost' aria-label='discard changes' icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      
        <IconButton size='xs' icon={<IconPencil />} aria-label='edit content' variant='ghost' colorScheme='teal' {...getEditButtonProps()} />
      
    )
  }

  return (
    <Stack spacing={4}>
    
        <Editable spacing={[3, 3, 5]} align='center' marginLeft='1.5rem'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
          <EditableControls justify='end'/> 
        </Editable>
   

      <Editable 
        defaultValue='therapist name'
        isPreviewFocusable={true}
        display='flex'
      >
        <InputGroup minWidth='250px'>
          <EditablePreview marginLeft='3rem' />
          <InputLeftElement children={<IconUser />}/>
          <Input type='text' as={EditableInput} /> 
        </InputGroup>
        {/* <EditableControls />  */}
      </Editable>
      <Editable 
        defaultValue='primary number'
        isPreviewFocusable={true}
        display='flex'
      >
        <InputGroup minWidth='250px'>
          <EditablePreview marginLeft='3rem' />
          <InputLeftElement children={<IconPhone />}/>
          <Input type='tel' as={EditableInput} /> 
        </InputGroup>
        {/* <EditableControls />  */}
      </Editable>
      <Editable 
          defaultValue='email'
          isPreviewFocusable={true}
          display='flex'
        >
          <InputGroup minWidth='250px'>
            <EditablePreview marginLeft='3rem' />
            <InputLeftElement children={<IconMail />}/>
            <Input type='email' as={EditableInput} /> 
          </InputGroup>
          {/* <EditableControls />  */}
        </Editable>
        <Editable 
          defaultValue='password'
          isPreviewFocusable={true}
          display='flex'
        >
          <InputGroup minWidth='250px'>
            <EditablePreview marginLeft='3rem' />
            <InputLeftElement children={<IconLock />}/>
            <Input type='password' as={EditableInput}/> 
          </InputGroup>
          {/* <EditableControls />  */}
        </Editable>
          
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