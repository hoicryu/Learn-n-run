import React from "react";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";

function Routes(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Routes;
