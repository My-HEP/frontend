import { Flex, Heading } from '@chakra-ui/react';
import PatientTable from '../components/PatientTable';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import AddPatientModal from '../components/AddPatientModal';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Patients() {
  return (
    <>
      <SideNav />
      <BottomNav />
      <Link to="/therapisthome">
        <Header />
      </Link>
      <Flex
        height="100%"
        direction="column"
        justify="flex-start"
        marginLeft={['10', '10', '20%']}
        marginRight={['10', '10', '20%']}
        paddingTop="2rem"
        paddingBottom="100px"
      >
        <Flex
          direction={['column', 'column', 'row', 'row']}
          align={['center', 'center', 'left']}
          justifyContent="space-between"
          maxWidth="800px"
          marginBottom="4rem"
        >
          <Heading
            paddingBottom={['2rem', '2rem', '0', '0']}
            width={{ base: '100%' }}
            textAlign={['center', 'center', 'left']}
          >
            Select Existing Patient
          </Heading>

          <AddPatientModal />
        </Flex>
        <Flex justifyContent={['center', 'center', 'left']}>
          <SearchBar />
        </Flex>
        <PatientTable />
      </Flex>
    </>
  );
}

export default Patients;
