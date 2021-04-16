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
  const haha = () => {
    console.log("haha");
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
        <KakaoLogin
          src="/images/kakaoLogin.png"
          alt="kakao"
          onClick={haha}
        ></KakaoLogin>
      </InputBtnWrapper>
      <LinksWrapper>
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
  border-radius: 10px;
  background-color: #a5c8c5;

  @media screen and (max-width: 780px) {
    width: 90%;
    padding: 5%;
    margin-left: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 3%;
  }

  h1 {
    width: 80%;
    font-size: 2em;
    padding: 0.5em 0 0.5em 2em;

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
  width: 80%;
  margin: 0 auto 0 auto;
  color: black;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.3rem;
  @media screen and (max-width: 780px) {
    padding: 1rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.7rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
  font-size: 1em;
  padding-bottom: 2em;
  @media screen and (max-width: 780px) {
    font-size: 0.7em;
    margin-bottom: 0.8em;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.4em;
    margin-bottom: 0.6em;
  }
`;

const KakaoLogin = styled.img`
  cursor: pointer;
  padding: 1.3rem;
  @media screen and (max-width: 780px) {
    padding: 1rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0.7rem;
  }
`;

export default Signin;
