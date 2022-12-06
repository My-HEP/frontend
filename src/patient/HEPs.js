import { useState, useEffect } from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react';
import Header from '../therapist/components/Header';
import HEPList from '../therapist/components/HEPList';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useFirebaseAuth } from '../context/FirebaseAuthContext';
import { useParams } from 'react-router-dom';

const PatientHEPs = () => {
  const { user, userRole } = useFirebaseAuth() ?? {};
  const uidFromUrl = useParams();

  const uid = userRole === 'THERAPIST' ? uidFromUrl.uid : user?.auth?.currentUser?.uid;
  

  const [currentUserData, setCurrentUserData] = useState([]);
  const [HEPs, setHEPs] = useState([]);

  const fetchUser = async (req, res) => {
    const response = await fetch(`http://localhost:3001/user/${uid}`);
    const userResponse = await response.json();
    setCurrentUserData(userResponse);
  };

  useEffect(() => {
    fetchUser();
    
    const fetchHEPs = async () => {
      let response = await fetch(`http://localhost:3001/therapist/getHEPExercises/${currentUserData.id}`);
      const hepExercises = await response.json();
      let reversedArray = [...hepExercises].reverse();
      setHEPs(reversedArray);
    }

    if(currentUserData.id){
      fetchHEPs()
    }


  }, [uid, currentUserData.id]);
  
  

  return (
    <>
      <Header />
      <Flex
        height="100%"
        direction="column"
        justify="flex-start"
        margin='0 auto'
        padding='2rem 1rem 100px 1rem'
        gap="70"
        maxWidth="800px"
      >
        
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
        </Flex>
        <HEPList HEPs={HEPs} />
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
    </>
  );
}

export default PatientHEPs;
