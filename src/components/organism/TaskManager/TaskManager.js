import React from "react";
import { StyledHeader } from "../../atom/Header.styles";
import InputForm from "../../molecules/InputForm";

const TaskManager = () => {
  return (
    <>
      <StyledHeader>Personal Task Manager</StyledHeader>
      <InputForm />
    </>
  );
};

export default TaskManager;
