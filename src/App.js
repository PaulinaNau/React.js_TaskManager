import React from "react";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/style/theme";
import Articles from "./components/organism/Articles/Articles";
import TaskManager from "./components/organism/TaskManager/TaskManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/organism/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<TaskManager />}></Route>
          <Route path="/news" element={<Articles />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeProvider>
      </Router>
    </>
  );
};

export default App;


