import { useState, useEffect, useRef } from 'react';
import { TableContainer, Table, Tbody, Tr, Td } from '@chakra-ui/react';

const ExerciseList = () => {

    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState('');

  
    const exerciseTable = useRef();

    useEffect(()=> {
        let getHEPExercises = async (req, res) => {
        const response = await fetch('http://localhost:3001/therapist/Exercises')
        const exerciseAssignments = await response.json();
        setExercises(exerciseAssignments)
        }

        getHEPExercises()


        const styleSelected = (selectedRow) => {
          Array.from(exerciseTable.current.children).forEach(row => Array.from(row.children).forEach(
            tableRow => {
              if(tableRow.id === selectedRow){
                tableRow.style.backgroundColor = "#E6FFFA"
              }else(
                tableRow.style.backgroundColor = "white"
              )
            }
          ))

          Array.from(exerciseTable.current.children).forEach(row => Array.from(row.children).forEach(
            tableData => {
              if(tableData.id === selectedRow){
                tableData.style.fontWeight = "600"
              }else(
                tableData.style.fontWeight = "initial"
              )
            }
          ))
         
        };

        styleSelected(selectedExercise);

    }, [selectedExercise])

    const selectExercise = (e) => {
      let exerciseId = e.target.id;
      setSelectedExercise(exerciseId)
    } 

  
    return exercises ? (
        <TableContainer
        width="100%"
        maxWidth="700px"
        border="1px"
        borderRadius="7"
        borderColor="lightgray"
      >
        <Table variant="simple">
          <Tbody ref={exerciseTable}>
            {exercises.map(exercise => {
            return(
              <Tr key={exercise.id}>
                <Td id={exercise.id} onClick={selectExercise}>{exercise.title}</Td>
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