import React from "react";
import { StyledWrapper } from "../organism/TaskManager/TaskManager.styles";
import { StyledInput } from "../atom/Input.styles";
import { StyledTextArea } from "../atom/TextArea.styles";
import { StyledButton } from "../atom/Button.styles";
import { useState } from "react";
import { TaskData } from "../../data/TaskData";
import TaskList from "./TaskList";



const InputForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState(TaskData);

  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
        title: title,
        body: description,
        id: 2,
      };
      setTaskList([newTask, ...taskList]);
      console.log(TaskData);
      setTitle("");
      setDescription("");
  };

  return (
    <>
      <StyledWrapper $light>
        <form onSubmit={handleAddTask}>
          <div className="center">
            <StyledInput
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="center">
            <StyledTextArea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="center">
            <StyledButton>Add</StyledButton>
          </div>
        </form>
      </StyledWrapper>
      <TaskList taskList={taskList} />
    </>
  );
};

export default InputForm;
