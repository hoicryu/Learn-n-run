import React from "react";

import InputBox from "../../../Components/InputBox";
import Button from "../../../Components/Button";

import styled from "styled-components";

function Signin(props) {
  return (
    <SigninWrapper>
      <h1>로그인</h1>
      <InputBox Name="회원 ID"></InputBox>
      <InputBox Name="비밀번호"></InputBox>
      <ButtonWrapper>
        <Button buttonName="Login" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button buttonName="Login" color="kakao" />
        <Button buttonName="Login" color="naver" />
      </ButtonWrapper>
      <LinksWrapper>
        <p>아이디 찾기</p>
        <p>비밀번호 찾기</p>
        <p>회원가입</p>
      </LinksWrapper>
    </SigninWrapper>
  );
}

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65vw;
  margin-left: 8%;

  @media screen and (max-width: 780px) {
    width: 90%;
    padding: 5%;
    margin-left: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 3%;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
    @media screen and (max-width: 780px) {
      font-size: 2em;
      margin-bottom: 0.8em;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.4em;
      margin-bottom: 0.6em;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.3rem 1.3rem 1.3rem 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
`;

export default Signin;
