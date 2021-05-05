import React from "react";

import MainRank from "./MainRank/MainRank";
import Signin from "./Signin/Signin";
import RunningRecord from "../RunningRecord/RunningRecord";
import MyPage from "./MyPage/MyPage"

import theme from "../../Styles/Theme";
import styled from "styled-components";

function Main() {
  return (
    <MainWrapper theme={theme}>
      <MyPage />
      {/* <RunningRecord /> */}
      {/* <Signin /> */}
      {/* <MainRank /> */}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  background-color: ${(props) => props.theme.MAIN_BACK_COLOR};
  transition: 1s;
  color: white;
  @media screen and (max-width: 780px) {
    width: auto;
    height: 75%;
  }
`;

export default Main;
