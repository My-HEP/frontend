import { useState, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Header from '../therapist/components/Header';
import HEPList from '../therapist/components/HEPList';
import { useFirebaseAuth } from '../context/FirebaseAuthContext';

const PatientHEPs = () => {
  const { user } = useFirebaseAuth() ?? {};
  const uid = user?.auth?.currentUser?.uid;

  const [currentUserData, setCurrentUserData] = useState([]);
  const [HEPs, setHEPs] = useState([]);

  console.log(uid)
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
        marginLeft={['4', '10', '20%']}
        marginRight={['4', '10', '10%']}
        paddingTop="2rem"
        paddingBottom="100px"
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

      </Flex>
    </>
  );
}

export default PatientHEPs;
