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

function Patients() {
  const searchIconColor = useColorModeValue('black', 'white');

  return (
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
        justifyContent="space-between"
        maxWidth="800px"
        marginBottom="4rem"
      >
        <Heading
          paddingBottom={['2rem', '2rem', '0', '0']}
          width={{ base: '100%' }}
        >
          Select Existing Patient
        </Heading>

        <Button variant="outline" size="lg" maxWidth="350px" bg="#2C7A7B">
          Add New Patient
        </Button>
      </Flex>
      <InputGroup maxW="450px" align="center" marginBottom="2rem">
        <InputLeftElement
          pointerEvents="none"
          children={<IconSearch color={searchIconColor} />}
        />
        <Input variant="outline" placeholder="Search" />
      </InputGroup>
      <PatientTable />
    </Flex>

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
