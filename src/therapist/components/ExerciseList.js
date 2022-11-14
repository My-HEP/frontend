import { useState, useEffect, useRef } from 'react';
import { TableContainer, Table, Tbody, Tr, Td } from '@chakra-ui/react';

const ExerciseList = ({ selectedExercise, setSelectedExercise }) => {
  const [exercises, setExercises] = useState([]);

  const exerciseTable = useRef();

  useEffect(() => {
    let getHEPExercises = async (req, res) => {
      const response = await fetch('http://localhost:3001/therapist/Exercises');
      const exerciseAssignments = await response.json();
      setExercises(exerciseAssignments);
    };

    getHEPExercises();

    const styleSelected = selectedRow => {
      Array.from(exerciseTable.current.children).forEach(row =>
        Array.from(row.children).forEach(tableRow => {
          if (tableRow.id === selectedRow) {
            tableRow.style.fontWeight = '600';
            tableRow.style.backgroundColor = '#E6FFFA';
            tableRow.style.color = 'black';
          } else {
            tableRow.style.fontWeight = 'initial';
            tableRow.style.backgroundColor = 'initial';
            tableRow.style.color = 'initial';
          }
        })
      );
    };

    styleSelected(selectedExercise);
  }, [selectedExercise]);

  const selectExercise = e => {
    let exerciseId = e.target.id;
    setSelectedExercise(exerciseId);
  };

  const setSelectedStyle = (currentExercise) => {
    return currentExercise === selectedExercise ? selectedStyle : deselectedStyle;
  }
  
  const selectedStyle = { backgroundColor: '#E6FFFA', fontWeight: 600, color: 'black' } ;
  const deselectedStyle = { backgroundColor: 'initial', fontWeight: 'intial', color: 'initial' } ;
  

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
            return (
              <Tr key={exercise.id} style={setSelectedStyle(exercise.id)}>
                <Td id={exercise.id} onClick={selectExercise}>
                  {exercise.title}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <p>"Loading exercises..."</p>
  );
};

export default ExerciseList;
