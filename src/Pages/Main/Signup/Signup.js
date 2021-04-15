import React, { useState } from "react";

import InputBox from "../../../Components/InputBox";
import Button from "../../../Components/Button";
import SelectBox from "../../../Components/SelectBox";

import styled from "styled-components";

function Signup(props) {
  const [id, setId] = useState({});
  const [pw, setPw] = useState({});
  const [confirmPw, setConfirmPw] = useState({});
  const [birth, setBirth] = useState({});
  const [gender, setGender] = useState({});
  const [email, setEmail] = useState({});
  const [userName, setUserName] = useState({});

  const setupInputValue = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    }
    if (e.target.name === "pw") {
      setPw(e.target.value);
    }
    if (e.target.name === "confirmPw") {
      setConfirmPw(e.target.value);
    }
    if (e.target.name === "birth") {
      setBirth(e.target.value);
    }
    if (e.target.name === "gender") {
      setGender(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
  };

  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <h2>정보입력</h2>
      <InputArea>
        <InputBtnBox>
          <InputBox
            Name="아이디입력"
            inputName="id"
            inputType="text"
            inputBlankLabel="필수정보 입니다"
            inputFailedLabel="6자 이상의 영문, 소문자, 숫자, 공백을 제외한 특수기호만 사용이 가능합니다"
            inputOverlapLabel="이미 사용중인 아이디입니다"
            inputSuccessLabel="사용가능한 아이디입니다"
            setupInputValue={setupInputValue}
          />
          <ButtonWrapper>
            <Button buttonName="중복검사" />
          </ButtonWrapper>
        </InputBtnBox>
        <InputBox
          Name="비밀번호"
          inputName="pw"
          inputType="text"
          inputBlankLabel="필수정보 입니다"
          inputFailedLabel="8~16자 영문 대 소문자, 숫자, 특수문자 중 사용해주세요"
          setupInputValue={setupInputValue}
        />
        <InputBox
          Name="비밀번호 재확인"
          inputName="confirmPw"
          inputType="text"
          inputBlankLabel="필수정보 입니다"
          inputFailedLabel="비밀번호가 일치하지 않습니다"
          inputSuccessLabel="비밀번호가 일치합니다"
          setupInputValue={setupInputValue}
        />
        <InputBox
          Name="이름 (닉네임)"
          inputName="userName"
          InputType="text"
          setupInputValue={setupInputValue}
        />
        <InputBox
          Name="생년월일"
          inputName="birth"
          inputType="date"
          inputBlankLabel="필수정보 입니다"
          setupInputValue={setupInputValue}
        />
        <SelectBox
          Name="성별"
          selectName="gender"
          optionList={["선택", "남자", "여자"]}
          setupSelectedOption={setupInputValue}
          inputBlankLabel="필수정보 입니다"
        ></SelectBox>
        <InputBtnBox>
          <InputBox
            Name="이메일 / 본인인증"
            inputName="email"
            inputType="email"
            inputBlankLabel="필수정보 입니다"
            inputFailedLabel="이메일형식이 맞지 않습니다"
            inputSuccessLabel="이메일 인증을 완료했습니다"
            setupInputValue={setupInputValue}
          />
          <ButtonWrapper>
            <Button buttonName="인증번호 받기" />
            <Button buttonName="인증하기" />
          </ButtonWrapper>
        </InputBtnBox>

        <ButtonWrapper>
          <Button buttonName="가입하기" />
        </ButtonWrapper>
      </InputArea>
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
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
      font-size: 1.5em;
      margin-bottom: 0.8em;
    }
    @media screen and (max-width: 400px) {
      font-size: 1em;
      margin-bottom: 0.6em;
    }
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 1rem;

    @media screen and (max-width: 780px) {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }

    @media screen and (max-width: 400px) {
      font-size: 1em;
      margin-bottom: 0.3em;
    }
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputBtnBox = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.3rem 1.3rem 1.3rem 0;

  button {
    margin-left: 0.5rem;
    @media screen and (max-width: 780px) {
      margin-left: 0.4rem;
    }

    @media screen and (max-width: 400px) {
      margin-left: 0.3rem;
    }
  }
`;

export default Signup;
