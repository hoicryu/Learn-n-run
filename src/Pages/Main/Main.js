import React from "react";

import MainRank from "./MainRank/MainRank";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Nav from "./Nav/Nav";

import theme from "../../Styles/theme";
import styled from "styled-components";

function Main() {
  return (
    <MainWrapper theme={theme}>
      {/* <Signin /> */}
      <Signup />
      {/* <MainRank /> */}
      <Nav />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.mainBack};
  transition: 1s;
  color: white;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Main;
