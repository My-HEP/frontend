import { useState, useEffect, useCallback } from 'react';
import { Link, useHref } from 'react-router-dom';
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
  Box,
  AspectRatio,
  Image,
  Stack,
  Fade,
  SkeletonText,
} from '@chakra-ui/react';
import Confirmation from '../therapist/components/LogoutConfirmation';
import EditInfoForm from '../shared/components/EditInfoForm';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { IconUsers, IconBarbell } from '@tabler/icons';
import waves from '../therapist/pages/layered-waves-haikei (1).svg';
import { useFirebaseAuth } from '../context/FirebaseAuthContext';

function PatientHome() {
  const [userData, setUserData] = useState([]);
  const [homeStats, setHomeStats] = useState({});
  const [isLoaded, setIsLoaded] = useState(true);
  

  const { user } = useFirebaseAuth() ?? {};
  const uid = user?.auth?.currentUser?.uid;

  const fetchUserData = async (req, res) => {
    const response = await fetch(`http://localhost:3001/user/${uid}`);
    const userResponse = await response.json();
    setUserData(userResponse);
    setIsLoaded(true);
  };

  useEffect(() => {
    setIsLoaded(false);
    if (uid) {
      fetchUserData();
    }

    const homeStats = async (req, res) => {
      const response = await fetch('http://localhost:3001/therapist/homeStats');
      const stats = await response.json();
      setHomeStats(stats);
    };

    homeStats();
  }, [uid, setHomeStats, setUserData, setIsLoaded]);

  const variables = {
    userName: userData?.firstName + ' ' + userData?.lastName,
    patientNum: homeStats?.patientsNum,
    exerciseNum: homeStats?.exercisesNum,
    avatar: userData?.avatar,
  };

  // eslint-disable-next-line no-lone-blocks
  {
    if (!isLoaded) {
      return (
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100vh"
          padding="0"
          gap="1rem"
          position="relative"
        >
          <SkeletonCircle left="0" size={40} />
          <Skeleton height="40px" width="50%" maxWidth="600px" />
          <Skeleton height="20px" width="50%" maxWidth="600px" />
          <Skeleton height="20px" width="50%" maxWidth="600px" />
        </Flex>
      );
    } else if (userData.firstName) {
      return (
        <>
          <Fade in={isLoaded}>
            <Flex
              direction="column"
              align="center"
              height="100vh"
              padding="0"
              zIndex="1"
              overflow="scroll"
            >
              <AspectRatio
                ratio={16 / 9}
                position="null"
                display={['none', 'none', 'flex']}
              >
                <Image src={waves} position="fixed" />
              </AspectRatio>

              <Flex
                height="100%"
                direction="column"
                align={['center', 'center', 'start']}
                marginLeft={['10', '10', '20%']}
                marginRight={['10', '10', '20%']}
                marginTop={['20', '20', '40']}
                paddingTop={['0', '0', '5rem']}
                paddingBottom="100px"
                minWidth="10rem"
                zIndex="1"
              >
                <VStack align={['center', 'center', 'start']}>
                  <Heading size={'3xl'} textAlign={['center', 'left']}>
                    Welcome back, patient
                  </Heading>
                  {userData.firstName ? (
                    <Heading size={'2xl'} textAlign={['center', 'left']}>
                      {userData.firstName}
                    </Heading>
                  ) : (
                    <SkeletonText />
                  )}
                </VStack>
                <Flex
                  direction={['column', 'column', 'row']}
                  marginTop={['2rem', '2rem', '5rem']}
                >
                  <VStack
                    spacing={[3, 3, 5]}
                    width={['100%', '100%', '50%']}
                    minWidth="300px"
                    align={['center', 'center', 'start']}
                    padding="0px"
                  >
                    <Avatar
                      name={variables.userName}
                      src={variables.avatar}
                      size="2xl"
                    />

                    <VStack spacing={5} align="start">
                      <Flex
                        minWidth="200px"
                        gap="3"
                        justify="start"
                        align="start"
                      >
                        <Text as="b" fontSize="2xl">
                          {variables.userName}
                        </Text>
                      </Flex>
                      <EditInfoForm
                        type={'self'}
                        patientId={userData.uid}
                        currentFirstName={userData.firstName}
                        currentLastName={userData.lastName}
                        currentPhone={userData.phone}
                        currentEmail={userData.email}
                        currentFullName={variables.patientName}
                        fetchUserData={fetchUserData}
                      />
                      <Confirmation />
                    </VStack>
                  </VStack>
                  <VStack
                    spacing={[6, 7, 10]}
                    width={['100%', '100%', '50%']}
                    mt={['3rem', '3rem', 0]}
                    minWidth="300px"
                  >
                   
                    <Text as="b">
                      You have {variables.exerciseNum}assigned HEPs.
                    </Text>

                    <Link to="/patient/my-HEPs">
                      <Button
                        leftIcon={<IconBarbell />}
                        colorScheme="teal"
                        variant="outline"
                        size="lg"
                        minWidth="14.5rem"
                      >
                        View HEPs
                      </Button>
                    </Link>
                  </VStack>
                </Flex>
                <Box
                  display="block"
                  position="fixed"
                  bottom={['10px', '10px', '30px']}
                  align="center"
                  left={['4px', '7px', '20px']}
                >
                  <ColorModeSwitcher />
                </Box>
              </Flex>
            </Flex>
          </Fade>
        </>
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

export default PatientHome;
