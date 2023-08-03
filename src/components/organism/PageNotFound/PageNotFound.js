import React from "react";
import { StyledHeader } from "../../atom/Header.styles";
import { TaskDescription, TaskTitle } from "../../atom/TaskText.styles";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <StyledHeader>Sorry</StyledHeader>
        <TaskTitle>This page does not exist.</TaskTitle>
        <Link to="/"><TaskDescription>Go back to the Home page.</TaskDescription></Link>
        </>
     );
}
 
export default NotFound;