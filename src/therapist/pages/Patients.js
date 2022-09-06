import {
  Flex,
  Heading,
  InputGroup,
  Input,
  InputLeftElement,
  useColorModeValue,
  Button,
  // Grid,
  // GridItem,
} from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons';
import PatientTable from '../components/PatientTable';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Patients() {
  const searchIconColor = useColorModeValue('black', 'white');

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

          <Button variant="outline" size="lg" maxWidth="350px" bg="#2C7A7B">
            Add New Patient
          </Button>
        </Flex>
        <Flex justifyContent={['center', 'center', 'left']}>
          <InputGroup maxW="450px" marginBottom="2rem">
            <InputLeftElement
              pointerEvents="none"
              children={<IconSearch color={searchIconColor} />}
            />
            <Input variant="outline" placeholder="Search" />
          </InputGroup>
        </Flex>
        <PatientTable />
      </Flex>
    </>
    //   <Grid
    //     templateAreas={`"nav header"
    //                 "nav main"
    //                 "nav main"`}
    //     gridTemplateRows={'100px 1fr 30px'}
    //     gridTemplateColumns={'75px 1fr'}
    //     h="100vh"
    //     gap="1"
    //   >
    //     <GridItem pl="2" area={'header'}>
    //       <Header />
    //     </GridItem>
    //     <GridItem pl="2" area={'nav'}>
    //       <SideNav />
    //     </GridItem>
    //     <GridItem pl="2" area={'main'}>
    //       <PatientTable />
    //     </GridItem>
    //   </Grid>
  );
}

export default Patients;
