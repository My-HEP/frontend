import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons';

function SearchBar({ handleSearch }) {
  const searchIconColor = useColorModeValue('black', 'white');

  return (
    <InputGroup maxW="450px" marginBottom="2rem">
      <InputLeftElement
        pointerEvents="none"
        children={<IconSearch color={searchIconColor} />}
      />
      <Input
        variant="outline"
        placeholder="Search"
        focusBorderColor="teal.500"
        onChange={handleSearch}
      />
    </InputGroup>
  );
}

export default SearchBar;
