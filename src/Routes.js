import React from "react";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
function Routes(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </ThemeProvider>
  );
}

export default Routes;
