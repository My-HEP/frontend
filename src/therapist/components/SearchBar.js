import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons';

function SearchBar(props) {
  const searchIconColor = useColorModeValue('black', 'white');

  return (
    <InputGroup maxW="450px" marginBottom="2rem" marginLeft={props.marginLeft}>
      <InputLeftElement
        pointerEvents="none"
        children={<IconSearch color={searchIconColor} />}
      />
      <Input variant="outline" placeholder="Search" />
    </InputGroup>
  );
}

export default SearchBar;
