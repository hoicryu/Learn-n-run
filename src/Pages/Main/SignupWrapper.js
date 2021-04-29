import React from "react";


import Signup from "./Signup/Signup";


import theme from "../../Styles/Theme";
import styled from "styled-components";

function SignupWrapper() {
  return (
    <SignupArea theme={theme}>
      <Signup />
    </SignupArea>
  );
}

const SignupArea = styled.div`
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

export default SignupWrapper;
