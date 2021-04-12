import React from "react";

import InputBox from "../../../Components/InputBox";
import Button from "../../../Components/Button";

import styled from "styled-components";

function Signup(props) {
  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <h2>정보입력</h2>
      <InputArea>
        <InputBtnBox>
          <InputBox
            inputName="아이디입력"
            inputType="text"
            inputBlankLabel="필수정보 입니다"
            inputFailedLabel="6자 이상의 영문, 소문자, 숫자, 공백을 제외한 특수기호만 사용이 가능합니다"
            inputOverlapLabel="이미 사용중인 아이디입니다"
            inputSuccessLabel="사용가능한 아이디입니다"
          />
          <ButtonWrapper>
            <Button buttonName="중복검사" />
          </ButtonWrapper>
        </InputBtnBox>
        <InputBox
          inputName="비밀번호"
          inputType="text"
          inputBlankLabel="필수정보 입니다"
          inputFailedLabel="8~16자 영문 대 소문자, 숫자, 특수문자 중 사용해주세요"
        />
        <InputBox
          inputName="비밀번호 재확인"
          inputType="text"
          inputBlankLabel="필수정보 입니다"
          inputFailedLabel="비밀번호가 일치하지 않습니다"
          inputSuccessLabel="비밀번호가 일치합니다"
        />
        <InputBox
          inputName="생년월일"
          inputType="date"
          inputBlankLabel="필수정보 입니다"
        />
        <InputBox
          inputName="성별"
          inputType="tex"
          inputBlankLabel="필수정보 입니다"
        />
        <InputBtnBox>
          <InputBox
            inputName="이메일 / 본인인증"
            inputType="email"
            inputBlankLabel="필수정보 입니다"
            inputFailedLabel="이메일형식이 맞지 않습니다"
            inputSuccessLabel="이메일 인증을 완료했습니다"
          />
          <ButtonWrapper>
            <Button buttonName="인증번호 받기" />
            <Button buttonName="인증하기" />
          </ButtonWrapper>
        </InputBtnBox>
        <InputBox inputName="위코드 기수" InputType="text" />
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
  width: 65%;
  margin-left: 8%;
  background-color: pink;

  @media screen and (max-width: 780px) {
    width: 90%;
    padding: 5%;
    margin-left: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 3%;
  }

  h1 {
    font-size: 2.5em;
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

  h2 {
    font-size: 2em;
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
    margin-left: 1rem;
    @media screen and (max-width: 780px) {
      margin-left: 0.7rem;
    }

    @media screen and (max-width: 400px) {
      margin-left: 0.3rem;
    }
  }
`;

export default Signup;
