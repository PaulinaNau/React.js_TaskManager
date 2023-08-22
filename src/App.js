import React from "react";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/style/theme";
import Articles from "./components/organism/Articles/Articles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/organism/PageNotFound/PageNotFound";
import NewTaskManager from "./components/organism/NewTaskManager/NewTaskManager";

const App = () => {
  return (
    <>
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<NewTaskManager />}></Route>
          <Route path="/news" element={<Articles />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ThemeProvider>
      </Router>
    </>
  );
};

export default App;


