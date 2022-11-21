import React from "react";
import AssignedHEP from './AssignedHEP';

const HEPList = ({HEPs, setUpdatedHEP}) => {
  return(
    HEPs.map(assignment => {
      return(
        <AssignedHEP
          key={assignment.exerciseId} 
          patientId={assignment.patientId}
          exerciseId={assignment.exerciseId}
          hepTitle={assignment.exercise?.title}
          url={assignment.exercise?.url}
          frequencyByDay={assignment.frequencyByDay}
          frequencyByWeek={assignment.frequencyByWeek}
          duration={assignment.duration}
          durationUnits={assignment.durationUnits}
          notes={assignment.notes}
          therapist={assignment.assignedById}
          setUpdatedHEP={setUpdatedHEP}
        /> 
      )
    })
  )}
  export default HEPList;