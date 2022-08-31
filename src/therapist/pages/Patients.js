import {
    Flex,
    Heading,
    InputGroup,
    Input,
    InputLeftElement,
    useColorModeValue
  } from '@chakra-ui/react';
  import {IconSearch} from '@tabler/icons'

function Patients () {
  const searchIconColor = useColorModeValue('black', 'white')

  return (
      <>
        <Flex direction="column" align="center">
          <Heading>Select Existing Patient</Heading>
          <InputGroup maxW="80%" align="center">
            <InputLeftElement pointerEvents='none' children={<IconSearch color={searchIconColor} />} />
            <Input variant="outline" placeholder='Search'  />
          </InputGroup>
        </Flex>
      </>
    )
  }
  
  export default Patients;