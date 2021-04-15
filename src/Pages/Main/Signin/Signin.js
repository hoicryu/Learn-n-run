import React, { useState } from "react";

import InputBox from "../../../Components/InputBox";
import Button from "../../../Components/Button";

import styled from "styled-components";

function Signin(props) {
  const [id, setId] = useState({});
  const [pw, setPw] = useState({});

  const setupInputValue = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    }
    if (e.target.name === "pw") {
      setPw(e.target.value);
    }
  };

  return (
    <SigninWrapper>
      <h1>로그인</h1>
      <InputBtnWrapper>
        <InputBox
          Name="회원 ID"
          inputName="id"
          setupInputValue={setupInputValue}
        ></InputBox>
        <InputBox
          Name="비밀번호"
          inputName="pw"
          setupInputValue={setupInputValue}
        ></InputBox>
        <ButtonWrapper>
          <Button buttonName="Login" />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button buttonName="Login" color="kakao" />
          <Button buttonName="Login" color="naver" />
        </ButtonWrapper>
      </InputBtnWrapper>
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
  background-color: red;

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
      font-size: 1.5em;
      margin-bottom: 0.8em;
    }
    @media screen and (max-width: 400px) {
      font-size: 1em;
      margin-bottom: 0.6em;
    }
  }
`;

const InputBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: green;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.3rem 1.3rem 1.3rem 0;
  @media screen and (max-width: 780px) {
    padding: 1rem 1rem 1rem 0;
  }
  @media screen and (max-width: 400px) {
    padding: 0.7rem 0.7rem 0.7rem 0;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
  font-size: 1em;
  @media screen and (max-width: 780px) {
    font-size: 0.7em;
    margin-bottom: 0.8em;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.4em;
    margin-bottom: 0.6em;
  }
`;

export default Signin;
