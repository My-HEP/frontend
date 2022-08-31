import {
  Flex,
  Heading,
  InputGroup,
  Input,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons';
import BottomNav from '../components/BottomNav';

function Patients() {
  const searchIconColor = useColorModeValue('black', 'white');

  return (
    <>
      <Flex direction="column" marginLeft="6rem" justifyContent="space-between">
        <Heading marginBottom="2rem">Select Existing Patient</Heading>
        <InputGroup maxW="80%" align="center">
          <InputLeftElement
            pointerEvents="none"
            children={<IconSearch color={searchIconColor} />}
          />
          <Input variant="outline" placeholder="Search" />
        </InputGroup>
      </Flex>
    </>
  );
}

export default Patients;
