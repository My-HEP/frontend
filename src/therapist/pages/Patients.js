import {
  Container,
    Flex,
    Heading,
    InputGroup,
    Input,
    InputLeftElement
  } from '@chakra-ui/react';
  import SideNav from '../components/SideNav';
  import {IconSearch} from '@tabler/icons'

function Patients () {
    return (
      <>
        <Flex direction="column">
          <Heading>Select Existing Patient</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<IconSearch color='gray.300' />} />
            <Input variant="outline" placeholder='Search' />
          </InputGroup>
        </Flex>
      </>
    );
  }
  
  export default Patients;