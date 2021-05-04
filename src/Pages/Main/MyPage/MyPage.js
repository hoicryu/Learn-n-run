import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import SmallInputBox from "../../../Components/SmallInputBox";
import SmallButton from "../../../Components/SmallButton";
import Button from "../../../Components/Button";

import {
  LNR_SERVER,
  KAKAO_JS_KEY,
} from "../../../Config";

import styled from "styled-components";


function MyPage(props) {
  useEffect(() => {

  }, []);

  const [pw, setPw] = useState({});

  const setupInputValue = (e) => {
    setPw(e.target.value);
  };

  const getUserEmail = () => {
    axios
      .get()

  }

  const history = useHistory();


  return (
    <MyPageWrapper>
      <h1>my page</h1>
      <MyInfoWrapper>
        <SmallInputBox
          Name="사진"
          inputName="picture"
          setupInputValue={setupInputValue}
        ></SmallInputBox>
        <InputBtnBox>
          <SmallInputBox
            Name="이름 (닉네임)"
            inputName="name"
            setupInputValue={setupInputValue}
            disabled={true}
          ></SmallInputBox>
          <SmallButton Samllname="이름변경" buttonName="변경" />
        </InputBtnBox>
        <InputBtnBox>
          <SmallInputBox
            Name="비밀번호"
            inputName="pw"
            setupInputValue={setupInputValue}
          ></SmallInputBox>
          <SmallButton name="pw변경" buttonName="변경" />
        </InputBtnBox>
        <SmallInputBox
          Name="현재 비밀번호"
          inputName="currentPw"
          setupInputValue={setupInputValue}
        ></SmallInputBox>
        <SmallInputBox
          Name="새 비밀번호"
          inputName="newPw"
          setupInputValue={setupInputValue}
        ></SmallInputBox>
        <SmallInputBox
          Name="다시입력"
          inputName="confirmPw"
          setupInputValue={setupInputValue}
        ></SmallInputBox>
        <ButtonBox>
          <Button name="확인" buttonName="확인" />
          <Button name="취소" buttonName="취소" />
        </ButtonBox>
      </MyInfoWrapper>
    </MyPageWrapper>
  );
}

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 35em;
  padding-bottom: 2em;
  border-radius: 10px;
  background-color: #a5c8c5;

  @media screen and (max-width: 780px) {
    width: 25em;
    padding-bottom: 2em;
    
  }

  @media screen and (max-width: 400px) {
    width: 15em;
    padding-bottom: 1em;
  }

  h1 {
    padding: 0.6rem 0 0.6rem 0;
    font-size: 1.8em;
    
    @media screen and (max-width: 780px) {
      font-size: 1.5em;
      
    }
    @media screen and (max-width: 400px) {
      font-size: 1em;
      
    }
  }
`;

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  color: black;
  background-color: white;
`;

const InputBtnBox = styled.div`
  display:flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  display:flex;
  padding-bottom: 1em;
`;


export default MyPage;
