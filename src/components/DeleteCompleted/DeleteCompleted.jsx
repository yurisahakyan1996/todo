import React from 'react';
import {Button} from "react-bootstrap";

const DeleteCompleted = ({deleteCompletedFn}) => {
  return (
    <div className='deleteButtonDiv'>
      <Button
        className='delete_completed_todos'
        variant='danger'
        onClick={deleteCompletedFn}
      >
        Delete Completed Todos
      </Button>
    </div>
  );
};

export default DeleteCompleted;