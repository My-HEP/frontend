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
  Box,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import Confirmation from '../components/LogoutConfirmation';
// import EditModal from '../../shared/components/Modal';
import EditInfoForm from '../../shared/components/EditInfoForm';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { IconUsers, IconBarbell } from '@tabler/icons';
// import { logoIcon } from '../../shared/components/LogoIcon';
import { getAuth } from 'firebase/auth';
import waves from './layered-waves-haikei (1).svg';
import { useFirebaseAuth } from '../../context/FirebaseAuthContext';

function TherapistHome() {
  const [userData, setUserData] = useState([]);
  const [homeStats, setHomeStats] = useState({});

  const { auth } = useFirebaseAuth() ?? {};
  const uid = auth?.currentUser?.uid;

  useEffect(() => {
    if (!uid) return;

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/user/${uid}`);
      const userResponse = await response.json();
      setUserData(userResponse);
    };

    const homeStats = async (req, res) => {
      const response = await fetch('http://localhost:3001/therapist/homeStats');
      const stats = await response.json();
      setHomeStats(stats);
    };

    homeStats();
    fetchData();
  }, [uid, setHomeStats, setUserData]);

  const variables = {
    userName: userData?.firstName + ' ' + userData?.lastName,
    patientNum: homeStats?.patientsNum,
    exerciseNum: homeStats?.exercisesNum,
    avatar: userData?.avatar,
  };

  // eslint-disable-next-line no-lone-blocks
  {
    if (uid) {
      return (
        <>
          <Flex
            direction="column"
            // justifyContent="center"
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
              // justify="center"
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
                  Welcome back,
                </Heading>
                {userData.firstName ? (
                  <Heading size={'2xl'} textAlign={['center', 'left']}>
                    {userData.firstName}
                  </Heading>
                ) : (
                  <Heading size={'2xl'} textAlign={['center', 'left']}>
                    Therapist
                  </Heading>
                )}
              </VStack>
              {/* <Flex
            gap={['2', '5']}
            mb={['1rem', '1rem', '2rem']}
            marginLeft={['0', '0', '3rem']}
            align="center"
            justify={['center', 'center', 'start']}
            minWidth={['300px', '300px', '500px']}
          >
            {/* <Icon as={logoIcon} boxSize={['5rem', '8rem']} /> */}
              {/* </Flex> */}
              <Flex
                direction={['column', 'column', 'row']}
                // margin={['1rem 0', '0.5rem 0', '2rem 0']}
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
                    {/* <EditModal type={'self'} /> */}
                    <EditInfoForm
                      type={'self'}
                      patientId={userData.uid}
                      currentFirstName={userData.firstName}
                      currentLastName={userData.lastName}
                      currentPhone={userData.phone}
                      currentEmail={userData.email}
                      currentFullName={variables.patientName}
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
                    Currently serving {variables.patientNum} patients
                  </Text>
                  <Link to="/patients">
                    <Button
                      leftIcon={<IconUsers />}
                      colorScheme="teal"
                      variant="outline"
                      size="lg"
                      minWidth="14.5rem"
                    >
                      My Patients
                    </Button>
                  </Link>
                  <Text as="b">{variables.exerciseNum} Exercises uploaded</Text>
                  <Link to="/exerciselibrary">
                    <Button
                      leftIcon={<IconBarbell />}
                      colorScheme="teal"
                      variant="outline"
                      size="lg"
                      minWidth="14.5rem"
                    >
                      Exercise Library
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

export default TherapistHome;
