import { useState, useEffect } from 'react';
import { Flex, VStack, Avatar, Heading, Text, Button } from '@chakra-ui/react';
import { IconMail, IconPhone, IconEye } from '@tabler/icons';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import EditInfoForm from '../../shared/components/EditInfoForm';
import AssignmentModal from '../components/AssignmentModal';
import HEPList from '../components/HEPList';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirebaseAuth } from '../../context/FirebaseAuthContext';

const HEP = () => {
  const uidFromUrl = useParams();
  const uid = uidFromUrl.uid;

  const { user } = useFirebaseAuth() ?? {};
  const therapistUid = user.auth?.currentUser?.uid;

  const [currentUserData, setCurrentUserData] = useState([]);
  const [therapist, setTherapist] = useState([]);
  const [HEPs, setHEPs] = useState([]);
  const [newHEP, setNewHEP] = useState([]);
  const [updatedHEP, setUpdatedHEP] = useState([]);

  const fetchUser = async (req, res) => {
    const response = await fetch(`http://localhost:3001/user/${uid}`);
    const userResponse = await response.json();
    setCurrentUserData(userResponse);
  };

  const fetchTherapist = async (req, res) => {
    const response = await fetch(`http://localhost:3001/user/${therapistUid}`);
    const userResponse = await response.json();
    setTherapist(userResponse);
  };

  useEffect(() => {
    fetchUser();
    fetchTherapist();

    const fetchHEPs = async () => {
      let response = await fetch(
        `http://localhost:3001/therapist/getHEPExercises/${currentUserData.id}`
      );
      const hepExercises = await response.json();

      let reversedArray = [...hepExercises].reverse();
      setHEPs(reversedArray);
    };

    if (currentUserData.id) {
      fetchHEPs();
    }

    const addHEP = () => {
      setHEPs([...HEPs, newHEP]);
    };

    addHEP();

    const updateHEP = () => {
      const indexOfUpdated = HEPs.findIndex(HEP => {
        return HEP.exerciseId === updatedHEP.exerciseId;
      });
      const newHEPs = HEPs.splice(indexOfUpdated, 1);
      if (updatedHEP.update === 'delete') {
        setHEPs([...newHEPs]);
      } else {
        setHEPs([updatedHEP, ...newHEPs]);
      }
    };

    updateHEP();
  }, [uid, currentUserData.id, newHEP, updatedHEP]);

  const formatPhoneNumber = phoneNumber => {
    if (phoneNumber !== undefined) {
      let stringNumber = phoneNumber.toString();
      return stringNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  };

  formatPhoneNumber(currentUserData.phone);
  const variables = {
    fullName: `${currentUserData.firstName} ${currentUserData.lastName}`,
    firstName: `${currentUserData.firstName}`,
    lastName: `${currentUserData.lastName}`,
    phone: formatPhoneNumber(currentUserData.phone),
    email: `${currentUserData.email}`,
    avatar: `${currentUserData.avatar}`,
  };

  const navigate = useNavigate();

  const toPatientView = () => {
    navigate(`/therapist/hep/${uid}/patientView`);
  };

  return (
    <>
      <SideNav />
      <BottomNav />
      <Header />
      <Flex
        height="100%"
        direction="column"
        justify="flex-start"
        marginLeft={['4', '10', '20%']}
        marginRight={['4', '10', '10%']}
        paddingTop="2rem"
        paddingBottom="100px"
        gap="70"
        maxWidth="800px"
      >
        <Flex
          flexDirection={['column', 'row', 'row']}
          justify={['center', 'center', 'space-between']}
          align="center"
          gap="3"
          margin={['0 auto', '0 0', '0 0 2rem 0']}
          maxWidth="800px"
        >
          <Avatar
            name={variables.fullName}
            src={variables.avatar}
            size="2xl"
            marginRight={['0', '3rem', '3rem']}
          />
          <VStack justify="center" align="start" spacing={5}>
            <Heading as="h1" size="xl">
              {variables.fullName}
            </Heading>
            <Flex
              width="100%"
              justify="space-between"
              flexDirection={['column', 'column', 'row']}
              gap="3"
              flexWrap="wrap"
            >
              <Flex gap="2" minWidth="200px">
                <IconPhone />
                <Text>{variables.phone}</Text>
              </Flex>
              <Flex gap="2" minWidth="200px">
                <IconMail />
                <Text>{variables.email}</Text>
              </Flex>
            </Flex>
            <EditInfoForm
              type={'therapist'}
              patientId={uid}
              currentAvatar={variables.avatar}
              currentFirstName={variables.firstName}
              currentLastName={variables.lastName}
              currentPhone={variables.phone}
              currentEmail={variables.email}
              currentFullName={variables.patientName}
              fetchUserData={fetchUser}
            />
          </VStack>
        </Flex>
        <Flex
          width="100%"
          justify={['center', 'space-between', 'space-between']}
          align="center"
          flexDirection={['column', 'row', 'row']}
          gap={['8', '8', '4']}
        >
          <Heading as="h2" fontSize="24px">
            Home Exercise Program
          </Heading>
          <AssignmentModal
            type="new"
            patientId={currentUserData.id}
            therapistId={therapist.id}
            setNewHEP={setNewHEP}
            HEPs={HEPs}
            setHEPs={setHEPs}
          />
        </Flex>
        <HEPList HEPs={HEPs} setUpdatedHEP={setUpdatedHEP} />
        <Button
          leftIcon={<IconEye />}
          variant="solid"
          colorScheme="teal"
          size="lg"
          width="220px"
          margin={['0 auto', '0 0', '0 0']}
          onClick={toPatientView}
        >
          Patient View
        </Button>
      </Flex>
    </>
  );
};

export default HEP;
