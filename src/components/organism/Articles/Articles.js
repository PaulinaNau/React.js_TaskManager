import React from "react";
import { StyledWrapper } from "./Articles.styles";
import ArticleList from "./ArticlesList";
import useFetch from "../../customHooks/useFetch";
import { StyledHeader } from "../../atom/Header.styles";

const Articles = () => {
 
  const {data: article, isLoading, error} = useFetch("http://localhost:3000/articles");
 

  return (
    <>
      <StyledWrapper>
        <StyledHeader $white>Breaking News</StyledHeader>
        {error && <StyledHeader $white>{error}</StyledHeader>}
        {isLoading && <StyledHeader $white>Loading...</StyledHeader>}
        {article && <ArticleList article={article} />}
      </StyledWrapper>
    </>
  );
};

export default Articles;
