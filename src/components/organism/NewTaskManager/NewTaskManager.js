import React, { useState } from "react";
import { TaskData } from "../../../data/TaskData";
import { StyledHeader } from "../../atom/Header.styles";
import { StyledWrapper } from "./NewTaskManager.styles";
import { StyledInput } from "../../atom/Input.styles";
import { StyledTextArea } from "../../atom/TextArea.styles";
import { StyledButton } from "../../atom/Button.styles";
import { TaskTitle, TaskDescription } from "../../atom/TaskText.styles";
import { StyledButtonDone } from "../../atom/ButtonDone.styles";
import { StyledButtonDelete } from "../../atom/ButtonDelete.styles";
import { ImportData } from "../../../data/TaskDataImport";

const NewTaskManager = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState(TaskData);

  const addTask = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      body: description,
      id: 0,
      done: false,
    };

    setTaskList([newTask, ...taskList]);
    console.log(taskList);
    setTitle("");
    setDescription("");
  };

  const handleDoneTask = (item, index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].done = !updatedTaskList[index].done;
    setTaskList(updatedTaskList);
  };

  const handleDeleteTask = (index) => {
    const updatedDeleteTaskList = taskList.filter((item) => item.id !== index);
    setTaskList(updatedDeleteTaskList);
  };

  const handleImport = (e) => {
    e.preventDefault();

    const importedData = ImportData.map((item) => ({
      title: item.title,
      body: item.body,
      id: item.id,
      done: item.done,
    }));

    setTaskList([...importedData, ...taskList]);
  };

  return (
    <>
      <StyledHeader>Personal Task Manager</StyledHeader>
      <StyledWrapper $light>
        <form>
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
            <StyledButton onClick={addTask}>Add</StyledButton>
            <StyledButton $isSecondary onClick={handleImport}>
              Import
            </StyledButton>
          </div>
        </form>
      </StyledWrapper>
      <StyledWrapper>
        {taskList.map((item, index) => (
          <>
            <div className="center" key={(item.id = index)}>
              <div
                className={item.done ? "task-done order-one" : "task order-one"}
              >
                <TaskTitle>{item.title}</TaskTitle>
                <TaskDescription>{item.body}</TaskDescription>
              </div>
              <div className="order-two additionalButton">
                <StyledButtonDelete
                  title="Delete this task"
                  onClick={() => {
                    handleDeleteTask(index);
                  }}
                />
                <StyledButtonDone
                  $isDone={item.done}
                  title="Mark as done"
                  onClick={() => {
                    handleDoneTask(item, index);
                  }}
                />
              </div>
            </div>
          </>
        ))}
      </StyledWrapper>
    </>
  );
};

export default NewTaskManager;
