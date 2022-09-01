import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

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

  return (
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
          {patientData.map(row => {
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
  );
}

export default PatientTable;
