import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Main from "./Pages/Main/Main";
import Nav from "./Pages/Nav/Nav";

import styled from "styled-components";
import theme from "./Styles/Theme";

function Routes(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
          <Nav />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default Routes;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;
