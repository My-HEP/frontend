import { 
  EditablePreview, 
  IconButton, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  Editable, 
  Tooltip, 
  EditableInput, 
  Avatar,
  Stack, 
  VStack,
  Flex, 
  useColorModeValue
} from "@chakra-ui/react";
import { IconPhone, IconMail,  IconLock, IconPencil, IconUser } from "@tabler/icons";

const InfoForm = ( ) => {
  
  return (
    <VStack margin="1rem auto">
      <Stack spacing={4} width={['80%', '60%', '50%']}>
        <Editable spacing={[3, 3, 5]} marginLeft='2rem'>
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
            <Tooltip label="Click to edit">
              <EditablePreview 
                marginLeft='2.5rem'
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue("gray.100", "gray.700")
                }}/>
            </Tooltip>
            <InputLeftElement children={<IconUser />}/>
            <Input type='text' as={EditableInput}/> 
          </InputGroup>
        </Editable>
        <Editable 
          defaultValue='primary number'
          isPreviewFocusable={true}
          display='flex'
        >
        <InputGroup>
          <Tooltip label="Click to edit">
              <EditablePreview 
                marginLeft='2.5rem'
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue("gray.100", "gray.700")
                }}/>
            </Tooltip>
            <InputLeftElement children={<IconPhone />}/>
            <Input type='tel' as={EditableInput} /> 
          </InputGroup>
        </Editable>
        <Editable 
            defaultValue='email'
            isPreviewFocusable={true}
            display='flex'
        >
          <InputGroup>
            <Tooltip label="Click to edit">
                <EditablePreview 
                  marginLeft='2.5rem'
                  py={2}
                  px={4}
                  _hover={{
                    background: useColorModeValue("gray.100", "gray.700")
                  }}/>
              </Tooltip>
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
          <Tooltip label="Click to edit">
              <EditablePreview 
                marginLeft='2.5rem'
                py={2}
                px={4}
                _hover={{
                  background: useColorModeValue("gray.100", "gray.700")
                }}/>
            </Tooltip>
            <InputLeftElement children={<IconLock />}/>
            <Input type='password' as={EditableInput}/> 
          </InputGroup>
        </Editable>
      </Stack>
    </VStack>
  )
}
  
 

export default InfoForm; 