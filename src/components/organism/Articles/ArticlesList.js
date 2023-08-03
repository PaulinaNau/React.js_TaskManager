import React from "react";
import { TaskTitle, TaskDescription, Author } from "../../atom/TaskText.styles";
import { StyledContainer } from "./Articles.styles";

const ArticleList = ({ article }) => {
  return (
    <>
      {article.map((item) => (
        <StyledContainer key={item.id}>
          <TaskTitle>
            {item.title} {item.id}
          </TaskTitle>
          <Author>Author: {item.author}</Author>
          <TaskDescription>{item.content}</TaskDescription>
        </StyledContainer>
      ))}
    </>
  );
};

export default ArticleList;
