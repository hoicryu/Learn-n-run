import React from "react";

import MainRank from "./MainRank/MainRank";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Nav from "./Nav/Nav";

import styled from "styled-components";

function Main(props) {
  return (
    <MainWrapper>
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

  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Main;
