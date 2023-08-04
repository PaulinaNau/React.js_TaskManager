import React, { useState } from "react";
import {
  StyledWrapper,
  StyledContainer,
} from "../organism/TaskManager/TaskManager.styles";
import { TaskTitle, TaskDescription } from "../atom/TaskText.styles";
import { StyledButtonEdit } from "../atom/ButtonEdit.styles";
import { StyledButtonDelete } from "../atom/ButtonDelete.styles";

const TaskList = ({ taskList }) => {
  const [done, setDone] = useState(false);

  const handleDoneButton = (e) => {
    e.preventDefault();
    setDone(!done);
  };

  return (
    <StyledWrapper>
      {taskList.map((item) => (
        <>
          <div className="center" key={item.id}>
            <StyledContainer done={done}>
              <TaskTitle>{item.title}</TaskTitle>
              <TaskDescription>{item.body}</TaskDescription>
            </StyledContainer>
            <div>
              <StyledButtonDelete title="Delete this task" />
              <StyledButtonEdit
                title="Mark as done"
                onClick={handleDoneButton}
              />
            </div>
          </div>
        </>
      ))}
    </StyledWrapper>
  );
};

export default TaskList;
