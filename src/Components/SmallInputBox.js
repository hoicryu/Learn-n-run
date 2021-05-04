import React from "react";

import SmallButton from "../Components/SmallButton"

import styled from "styled-components";

function SmallInputBox({
  Name,
  inputName,
  inputType,
  inputValue,
  inputPlaceHolder,
  inputBlankLabel,
  inputFailedLabel,
  inputOverlapLabel,
  inputSuccessLabel,
  setupInputValue,
  disabled,
}) {
  return (
    <SmallInputWrapper>
      <p>{Name}</p>
      <div>
        <input
          onChange={setupInputValue}
          type={inputType}
          placeholder={inputPlaceHolder}
          name={inputName}
          disabled={disabled}
          value={inputValue}
        ></input>
        <label></label>
      </div>
    </SmallInputWrapper>
  );
}

const SmallInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.2rem 1.2rem 0;
  width: 20rem;
  background-color:red;

  @media screen and (max-width: 780px) {
    width: 10rem;
    padding: 0.8rem 0.8rem 0.8rem 0;
  }

  @media screen and (max-width: 400px) {
    width: 8rem;
    padding: 0.6rem 0.6rem 0.6rem 0;
  }
  p {
    width: 40%;
    font-size: 0.8em;

    @media screen and (max-width: 780px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.6em;
    }
  }

  div {
    display: flex;
    width: 50%;

    input {
      padding: 0.5em;
      margin-left: 0.8rem;
      font-size: 0.8em;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      background-color: white;

      @media screen and (max-width: 780px) {
        padding: 0.3em;
        margin-left: 1.5rem;
        font-size: 0.8em;
      }

      @media screen and (max-width: 400px) {
        padding: 0.1em;
        margin-left: 0.5rem;
        font-size: 0.5em;
      }
    }

    label {
    }
  }
`;

export default SmallInputBox;