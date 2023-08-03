import React, { useState } from "react";
import {
  StyledWrapper,
  StyledContainer,
} from "../organism/TaskManager/TaskManager.styles";
import { TaskTitle, TaskDescription } from "../atom/TaskText.styles";
import { StyledButtonEdit } from "../atom/ButtonEdit.styles copy 2";
import { StyledButtonDelete } from "../atom/ButtonDelete.styles copy";

const TaskList = ({ taskList }) => {

  return (
    <StyledWrapper>
      {taskList.map((item) => (
        <div className="center" key={item.id}>
              <StyledContainer>
                <TaskTitle>{item.title}</TaskTitle>
                <TaskDescription>{item.body}</TaskDescription>
              </StyledContainer>
          <div>
            <StyledButtonDelete title="Delete this task" />
            <StyledButtonEdit title="Mark as done" />
          </div>
        </div>
      ))}
    </StyledWrapper>
  );
};

export default TaskList;
