import { useState, useEffect, useRef } from 'react';
import { TableContainer, Table, Tbody, Tr, Td } from '@chakra-ui/react';

const ExerciseList = ({
  selectedExerciseId,
  setSelectedExerciseId,
  setExercise,
  HEPs,
  searchTerm,
}) => {
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

    styleSelected(selectedExerciseId);
  }, [selectedExerciseId]);

  const searchData = exercises?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectExercise = e => {
    let exerciseId = e.target.id;
    let exerciseArray = [];
    HEPs.forEach(HEP => exerciseArray.push(HEP.exerciseId));
    if (exerciseArray.includes(exerciseId)) {
      return;
    }
    let selectedExerciseData = exercises.find(
      exercise => exercise.id === exerciseId
    );
    setSelectedExerciseId(exerciseId);
    setExercise({
      url: selectedExerciseData.url,
      title: selectedExerciseData.title,
    });
  };

  const setDisabled = currentExercise => {
    let exerciseArray = [];
    HEPs.forEach(HEP => exerciseArray.push(HEP.exerciseId));
    return exerciseArray.includes(currentExercise)
      ? disabledStyle
      : activeStyle;
  };

  const disabledStyle = {
    backgroundColor: 'RGBA(0, 0, 0, 0.16)',
    fontStyle: 'italic',
    color: 'gray',
  };
  const activeStyle = {
    backgroundColor: 'initial',
    fontWeight: 'intial',
    color: 'initial',
  };

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
          {searchData.map(exercise => {
            return (
              <Tr key={exercise.id} style={setDisabled(exercise.id)}>
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
