import React from "react";
import MainRank from "./MainRank/MainRank";
import Nav from "./Nav/Nav";

import styled from "styled-components";

function Main(props) {
  return (
    <MainArea>
      <MainRank />
      <Nav />
    </MainArea>
  );
}

const MainArea = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 400px) {
    align-items: center;
  }
`;

export default Main;
