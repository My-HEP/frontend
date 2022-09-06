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
  VStack,
  Flex
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { IconPhone, IconMail,  IconLock, IconPencil, IconUser } from "@tabler/icons";

const InfoForm = () => {
  
  return (
    <VStack margin="1rem auto">
      <Stack spacing={4} width='50%'>
        <Editable spacing={[3, 3, 5]} marginLeft='1.5rem'>
          <Flex justify='center' align='end'>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl'/>
            <IconButton size='xs' icon={<IconPencil />} aria-label='edit content' variant='ghost' colorScheme='teal' />
          </Flex>
        </Editable>
        <Editable 
          defaultValue='therapist name'
          isPreviewFocusable={true}
          display='flex'
        >
          <InputGroup >
            <EditablePreview marginLeft='2.5rem' marginTop='5px' />
            <InputLeftElement children={<IconUser />}/>
            <Input type='text' as={EditableInput}/> 
          </InputGroup>
          {/* <EditableControls />  */}
        </Editable>
        <Editable 
          defaultValue='primary number'
          isPreviewFocusable={true}
          display='flex'
        >
          <InputGroup>
            <EditablePreview marginLeft='2.5rem' marginTop='5px'  />
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
          <InputGroup>
            <EditablePreview marginLeft='2.5rem' marginTop='5px' />
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
          <InputGroup>
            <EditablePreview marginLeft='2.5rem' marginTop='5px' />
            <InputLeftElement children={<IconLock />}/>
            <Input type='password' as={EditableInput}/> 
          </InputGroup>
          {/* <EditableControls />  */}
      </Editable>
      </Stack>
    </VStack>
  )
}
  
 

export default InfoForm; 