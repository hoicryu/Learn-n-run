import React from "react";
import MainRank from "./MainRank/MainRank";
import Nav from "./Nav/Nav";

import styled from "styled-components";

function Main(props) {
  console.log("kiyeol");
  return (
    <MainWrapper>
      <MainRank />
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
