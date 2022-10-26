import { useState, useEffect } from 'react';
import { TableContainer, Table, Tbody, Tr, Td } from '@chakra-ui/react';

const ExerciseList = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(()=> {
        let getHEPExercises = async (req, res) => {
        const response = await fetch('http://localhost:3001/therapist/Exercises')
        const exerciseAssignments = await response.json();
        setExercises(exerciseAssignments)
        }

        getHEPExercises()

    }, [])


    return exercises ? (
        <TableContainer
        width="100%"
        maxWidth="700px"
        border="1px"
        borderRadius="7"
        borderColor="lightgray"
      >
        <Table variant="simple">
          <Tbody>
            {exercises.map(exercise => {
            return(
              <Tr>
                <Td key={exercise.id} id={exercise.id}>{exercise.title}</Td>
              </Tr>
            )})
            }
          </Tbody>
        </Table>
      </TableContainer>
    ) : (
       <p>"Loading exercises..."</p>
    );
}

export default ExerciseList;