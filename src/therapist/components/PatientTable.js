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
import { useState } from 'react';

function PatientTable(props) {
  const patientData = [
    { firstName: 'Adam', lastName: 'Aardvark', email: 'adam@gmail.com' },
    { firstName: 'Bertram', lastName: 'Beasley', email: 'bertram@gmail.com' },
    { firstName: 'Catherine', lastName: 'Combs', email: 'cath@gmail.com' },
    { firstName: 'Dylan', lastName: 'Daniels', email: 'dylpickle@gmail.com' },
    {
      firstName: 'Elizabeth',
      lastName: 'Ellingsly',
      email: 'elizardbeth@gmail.com',
    },
  ];

  const [search, setSearch] = useState('');
  const handleSearch = event => {
    setSearch(event.target.value);
  };
  const searchIconColor = useColorModeValue('black', 'white');
  const data = patientData.filter(item =>
    item.lastName.toLowerCase().includes(search.toLowerCase())
  );

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
            {data.map(row => {
              return (
                <Tr>
                  <Td>{row.firstName}</Td>
                  <Td>{row.lastName}</Td>
                  <Td>{row.email}</Td>
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
