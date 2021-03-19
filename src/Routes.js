import React from "react";
// import styled from "styled-components";
import Main from "./Pages/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    );
}

export default Routes;
