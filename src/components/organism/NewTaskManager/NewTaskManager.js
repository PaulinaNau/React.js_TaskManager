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

const NewTaskManager = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskList, setTaskList] = useState(TaskData);

  const handleAddTask = (e) => {
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
    console.log(item.done);
    console.log(item.id);
    console.log(taskList);
  };

  return (
    <>
      <StyledHeader>Personal Task Manager</StyledHeader>
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
      <StyledWrapper>
        {taskList.map((item, index) => (
          <>
            <div className="center" key={index}>
              <div className={item.done ? "task-done" : "task"}>
                <TaskTitle>{item.title}</TaskTitle>
                <TaskDescription>{item.body}</TaskDescription>
                <TaskDescription>{(item.id = index)}</TaskDescription>
                <TaskDescription>{index}</TaskDescription>
              </div>
              <div>
                <StyledButtonDelete title="Delete this task" />
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
