import React, { useState } from "react";
import { StyledHeader } from "../../atom/Header.styles";
import InputForm from "../../molecules/InputForm";
import TaskList from "../../molecules/TaskList";


const TaskManager = () => {
  
  return (
    <>
      <StyledHeader>Personal Task Manager</StyledHeader>
      <InputForm />
     
    </>
  );
};

export default TaskManager;
