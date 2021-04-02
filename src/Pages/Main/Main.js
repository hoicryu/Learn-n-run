import React from "react";
import MainRank from "./MainRank/MainRank";

import styled from "styled-components";

function Main(props) {
  return (
    <MainArea>
      <MainRank />
    </MainArea>
  );
}

const MainArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: green;
`;

export default Main;
