import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Icon,
  Heading,
  Text,
  Button,
  VStack,
  Avatar,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';
import Confirmation from '../components/LogoutConfirmation';
import EditModal from '../../shared/components/Modal';
import { IconUsers, IconBarbell } from '@tabler/icons';
import { logoIcon } from '../../shared/components/LogoIcon';
import { getAuth } from 'firebase/auth';

function TherapistHome() {
  const [userData, setUserData] = useState([]);
  const [homeStats, setHomeStats] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user?.uid;

  useEffect(() => {
    const fetchData = async (req, res) => {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid }),
      });

      const userResponse = await response.json();
      setUserData(userResponse);
      setIsLoaded(true);
    };

    const homeStats = async (req, res) => {
      const response = await fetch('http://localhost:3001/therapist/homeStats');
      const stats = await response.json();
      setHomeStats(stats);
    };

    homeStats();
    fetchData();
  }, [uid]);

  const variables = {
    userName: userData?.firstName + ' ' + userData?.lastName,
    patientNum: homeStats?.patientsNum,
    exerciseNum: homeStats?.exercisesNum,
  };

  // eslint-disable-next-line no-lone-blocks
  {
    if (user) {
      return (
        <Flex
          height="100%"
          direction="column"
          justify="center"
          align={['center', 'center', 'start']}
          marginLeft={['10', '10', '20%']}
          marginRight={['10', '10', '20%']}
          marginTop={['20', '20', '40']}
          paddingTop="2rem"
          paddingBottom="100px"
        >
          <Flex
            gap={['2', '5']}
            mb={['1rem', '1rem', '2rem']}
            align="center"
            justify={['center', 'center', 'start']}
            minWidth={['300px', '300px', '500px']}
          >
            <Icon as={logoIcon} boxSize={['5rem', '8rem']} />
            <Heading mt={['0.75rem', '1.65rem']} textAlign={['center', 'left']}>
              Welcome to My HEP
            </Heading>
          </Flex>
          <Flex
            width="100%"
            direction={['column', 'column', 'row']}
            margin={['1rem 0', '0.5rem 0', '2rem 0']}
            align="center"
            justify="center"
          >
            <VStack spacing={[3, 3, 5]}>
              <SkeletonCircle isLoaded={isLoaded} size={40}>
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  size="2xl"
                />
              </SkeletonCircle>

              <VStack spacing={5} align="start">
                <Flex minWidth="175px" gap="2" justify="start">
                  <Skeleton isLoaded={isLoaded}>
                    <Text as="b" fontSize="2xl">
                      {variables.userName}
                    </Text>
                  </Skeleton>
                </Flex>
                <EditModal type={'self'} />
                <Confirmation />
              </VStack>
            </VStack>
            <VStack
              spacing={[8, 7, 10]}
              width={['100%', '100%', '50%']}
              mt={['3rem', '3rem', 0]}
            >
              <Skeleton isLoaded={isLoaded}>
                <Text as="b">
                  Currently serving {variables.patientNum} patients
                </Text>
              </Skeleton>
              <Link to="/patients">
                <Button
                  leftIcon={<IconUsers />}
                  colorScheme="teal"
                  variant="outline"
                  size="lg"
                  minWidth="13.5rem"
                >
                  My Patients
                </Button>
              </Link>
              <Skeleton isLoaded={isLoaded}>
                <Text as="b">{variables.exerciseNum} Exercises uploaded</Text>
              </Skeleton>
              <Link to="/exerciselibrary">
                <Button
                  leftIcon={<IconBarbell />}
                  colorScheme="teal"
                  variant="outline"
                  size="lg"
                  minWidth="13.5rem"
                >
                  Exercise Library
                </Button>
              </Link>
            </VStack>
          </Flex>
        </Flex>
      );
    } else {
      return (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80vh"
        >
          <Flex
            direction="column"
            border="solid"
            padding="2rem"
            alignItems="center"
          >
            <Heading paddingBottom="1rem">
              No users are currently logged in
            </Heading>
            <Link to="/">Return to Login Page</Link>
          </Flex>
        </Flex>
      );
    }
  }
}

export default TherapistHome;
