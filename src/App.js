import React from "react";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/style/theme";
import Header from "./components/HeaderSection";
import { ViewContainer } from "./components/organism/ViewContainer";
import { Input } from "./components/atom/Input";
import { TextArea } from "./components/atom/TextArea";
import { Button } from "./components/atom/Button";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ViewContainer isLight>
          <Input placeholder="Title" />
          <TextArea placeholder="Description" />
          <Button>Add</Button>
        </ViewContainer>
        <ViewContainer>
          <ol>
            <li>cos tam
              <p>cosss tam dooaslknsa</p>
            </li>
            <li>cos tam 2 </li>
            <li>cos tam 3</li>
          </ol>
        </ViewContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
