import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import InputBox from "../../../Components/InputBox";
import Button from "../../../Components/Button";

import {
  KAKAO_REST_API_KEY,
  KAKAO_AUTHORIZE_API,
  MY_TEST_SERVER,
  LNR_SERVER,
  KAKAO_JS_KEY,
} from "../../../Config";

import styled from "styled-components";
const { Kakao } = window;

function Signin(props) {
  useEffect(() => {
    Kakao.init(KAKAO_JS_KEY);
  }, []);

  const [id, setId] = useState({});
  const [pw, setPw] = useState({});
  const [inKakaoLogin, setKakaoInLogin] = useState(false);

  const setupInputValue = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    }
    if (e.target.name === "pw") {
      setPw(e.target.value);
    }
  };

  const postLoginValue = () => {
    try {
      axios
        .post(LNR_SERVER, {
          id,
          pw,
        })
        .then((res) => {
          try {
            setLoginToken(res);
          } catch (err) {
            console.log(err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getKakaoAuthentication = () => {
    try {
      Kakao.Auth.login({
        success: (auth) => {
          const KakaoToken = Kakao.Auth.getAccessToken();
          postKakaoToken(KakaoToken);
          setKakaoInLogin(true);
          console.log("로그인이 되었습니다", KakaoToken);
        },
        fail: (err) => {
          console.log(err);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logoutKakao = () => {
    try {
      Kakao.Auth.logout(() => {
        console.log("로그아웃 되었습니다.", Kakao.Auth.getAccessToken());
        setKakaoInLogin(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const postKakaoToken = () => {
    try {
      axios
        .post(LNR_SERVER, {
          token: Kakao.Auth.getAccessToken(),
        })
        .then((res) => {
          try {
            setLoginToken(res);
            if (res.TOKEN) {
              throw new SyntaxError("TOKEN이 없습니다!");
            }
          } catch (err) {
            console.log(err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const history = useHistory();
  const setLoginToken = (res) => {
    window.localStorage.setItem("TOKEN", res.TOKEN);
    const TOKEN = window.localStorage.getItem("TOKEN");
    if (TOKEN !== undefined) {
      alert("회원님 환영합니다!");
      history.push("/");
      return;
    } else {
      alert(
        "등록돠지 않은 아이디이거나 \n아이디 또는 비밀번호를 잘못 입력하셨습니다."
      );
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
          <Button buttonName="Login" runFunction={postLoginValue} />
        </ButtonWrapper>
        <KakaoLoginBtn
          src="/images/kakaoLogin.png"
          alt="kakao"
          onClick={getKakaoAuthentication}
        ></KakaoLoginBtn>
        <button onClick={logoutKakao}>로그아웃</button>
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

const KakaoLoginBtn = styled.img`
  cursor: pointer;
  padding: 1.3rem;

  @media screen and (max-width: 780px) {
    width: 100px;
    padding: 1rem;
  }
  @media screen and (max-width: 400px) {
    width: 60px;
    padding: 0.7rem;
  }
`;

export default Signin;
