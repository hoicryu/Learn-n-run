import React from "react";

import InputBox from "../../../Components/InputBox";

import styled from "styled-components";

function Signup(props) {
  return (
    <SignupWrapper>
      <h1>회원가입</h1>
      <h2>정보입력</h2>
      <InputBox
        inputName="아이디입력"
        inputType="text"
        inputBlankLabel="필수정보 입니다"
        inputFailedLabel="6자 이상의 영문, 소문자, 숫자, 공백을 제외한 특수기호만 사용이 가능합니다"
        inputOverlapLabel="이미 사용중인 아이디입니다"
        inputSuccessLabel="사용가능한 아이디입니다"
      />
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
      <InputBox
        inputName="이메일 / 본인인증"
        inputType="email"
        inputBlankLabel="필수정보 입니다"
        inputFailedLabel="이메일형식이 맞지 않습니다"
        inputSuccessLabel="이메일 인증을 완료했습니다"
      />
      <InputBox inputName="위코드 기수" InputType="text" />
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  width: 65%;
  margin-left: 8%;
  @media screen and (max-width: 780px) {
    width: 100%;
    margin-left: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 1rem;
  }
`;

export default Signup;
