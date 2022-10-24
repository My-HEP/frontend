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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/therapist/patients');
      const patients = await response.json();
      setData(patients);
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

  const onRowClickHandler = (user) => {
    let id = user.currentTarget.id;
    navigate(`/hep/${id}`);
  };

  return (
    <>
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

      <TableContainer
        width="100%"
        maxWidth="700px"
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
                  id={user.id}
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
    </>
  );
}

export default PatientTable;
