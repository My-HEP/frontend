import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Skeleton,
  Fade,
} from '@chakra-ui/react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PatientTable(props) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/therapist/patients');
      const patients = await response.json();
      setData(patients);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };
  const searchIconColor = useColorModeValue('black', 'white');
  const searchData = data.filter(item =>
    item.lastName.toLowerCase().includes(search.toLowerCase())
  );

  const onRowClickHandler = user => {
    let uid = user.currentTarget.id;
    navigate(`/hep/${uid}`);
  };

  return (
    <>
      <Fade in={isLoaded}>
        <Flex justifyContent={['center', 'center', 'left']}>
          <InputGroup maxW="450px" marginBottom="2rem">
            <InputLeftElement
              pointerEvents="none"
              children={<IconSearch color={searchIconColor} />}
            />
            <Input
              variant="outline"
              placeholder="Search"
              onChange={handleSearch}
              focusBorderColor="teal.500"
            />
          </InputGroup>
        </Flex>
        <Skeleton isLoaded={isLoaded} fadeDuration={1}>
          <TableContainer
            width="100%"
            maxWidth="827px"
            border="solid"
            borderRadius="7"
            borderColor="gray"
          >
            <Table variant="simple">
              <TableCaption color="gray.400">
                Search by first name, last name, or email address
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>

              <Tbody>
                {searchData.map(user => {
                  return (
                    <Tr
                      onClick={user => onRowClickHandler(user)}
                      cursor="pointer"
                      key={user.uid}
                      id={user.uid}
                      link="true"
                    >
                      <Td>{user.firstName}</Td>
                      <Td>{user.lastName}</Td>
                      <Td>{user.email}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Skeleton>
      </Fade>
    </>
  );
}

export default PatientTable;
