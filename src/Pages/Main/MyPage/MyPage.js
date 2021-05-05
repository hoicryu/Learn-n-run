import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import SmallInputBox from "../../../Components/SmallInputBox";
import SmallButton from "../../../Components/SmallButton";
import ImageInput from "../../../Components/ImageInput"

import {
  LNR_SERVER,
  KAKAO_JS_KEY,
} from "../../../Config";

import styled from "styled-components";


function MyPage(props) {
  useEffect(() => {
    getUserPrivacy();
  }, []);

  const [userName, setUserName] = useState({
    "currentPw": "",
    "newPw": "",
    "confirmPw": ""
  });

  const [pw, setPw] = useState({
    "currentPw": "",
    "newPw": "",
    "confirmPw": ""
  });
  const [userPrivacy, setUserPrivacy] = useState({
    "profilePicture": "",
    "userName": "",
    "averageRecord": "",
  });

  const [changePw, setChangePw] = useState(false);

  const setupInputValue = (e) => {
    const { name, value } = e.target
    if (name === "currentPw") setPw({ ...pw, currentPw: value })
    if (name === "newPw") setPw({ ...pw, newPw: value })
    if (name === "confirmPw") setPw({ ...pw, confirmPw: value })
  };

  const getUserPrivacy = () => {
    axios
      .get(LNR_SERVER)
      .then((userPrivacy) => setUserPrivacy(userPrivacy))
      .catch((err) => console.log(err))
  }

  const onChangePassword = () => {
    setChangePw(!changePw)
  }

  const history = useHistory();


  return (
    <MyPageWrapper>
      <h1>my page</h1>
      <MyInfoWrapper>
        <div>
          <ImageInputWrapper>
            <image src={userPrivacy.profilePicture} alt="사진" />
            <ImageInput
              Name="사진"
              inputName="picture"
              setupInputValue={setupInputValue}
            ></ImageInput>
          </ImageInputWrapper>
          <InputBtnBox>
            <SmallInputBox
              Name="이름 (닉네임)"
              inputName="name"
              setupInputValue={setupInputValue}
              disabled={true}
            ></SmallInputBox>
            <SmallButton name="이름변경" buttonName="변경" />
          </InputBtnBox>
          <InputBtnBox>
            <SmallInputBox
              Name="비밀번호"
              inputName="pw"
              inputType="password"
            ></SmallInputBox>
            <SmallButton name="pw변경" buttonName="변경" runFunction={onChangePassword} />
          </InputBtnBox>
          {changePw && <>
            <SmallInputBox
              Name="현재 비밀번호"
              inputName="currentPw"
              inputType="password"
              setupInputValue={setupInputValue}
            />
            <SmallInputBox
              Name="새 비밀번호"
              inputName="newPw"
              inputType="password"
              setupInputValue={setupInputValue}
            />
            <SmallInputBox
              Name="다시입력"
              inputName="confirmPw"
              inputType="password"
              setupInputValue={setupInputValue}
            /></>}
          <MyRecord>
            <p>나의 기록</p>
            <span>123 km</span>
            <span>5:30 min/km</span>
          </MyRecord>
        </div>
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

const ImageInputWrapper = styled.div`

`;

const MyRecord = styled.div`
  display: flex;
  width: 20rem;
  padding: 1.2rem 1.2rem 2rem 0;
  font-size: 0.8em;

  @media screen and (max-width: 780px) {
    width: 15rem;
    padding: 0.8rem 0.8rem 2rem 0;
    font-size: 0.7em;
  }

  @media screen and (max-width: 400px) {
    width: 10rem;
    padding: 0.6rem 0.6rem 2rem 0;
    font-size: 0.6em;
  }

  p{
    width: 40%
  }
  span{
    margin-left: 0.8rem;

    @media screen and (max-width: 780px) {
        margin-left: 0.6rem;
      }

      @media screen and (max-width: 400px) {
        margin-left: 0.5rem;
      } 
  }

`;


export default MyPage;
