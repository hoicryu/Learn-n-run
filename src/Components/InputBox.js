import React from "react";

import styled from "styled-components";

function InputBox({
  inputName,
  inputType,
  inputValue,
  inputPlaceHolder,
  inputBlankLabel,
  inputFailedLabel,
  inputOverlapLabel,
  inputSuccessLabel,
}) {
  return (
    <InputWrapper>
      <p>{inputName}</p>
      <div>
        <input
          type={inputType}
          value={inputValue}
          placeholder={inputPlaceHolder}
        ></input>
        <label></label>
      </div>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1.3rem 1.3rem 0;
  width: 60%;

  background-color: red;

  @media screen and (max-width: 780px) {
    padding: 0.8rem 0.8rem 0.8rem 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0.6rem 0.6rem 0.6rem 0;
  }
  p {
    width: 8em;
    font-size: 1.2em;
    @media screen and (max-width: 780px) {
      width: 7em;
      font-size: 0.8em;
    }
  }

  div {
    display: flex;

    input {
      padding: 0.5em;
      margin-left: 2rem;
      font-size: 1.2em;
      border: 1px solid #ebebeb;
      border-radius: 10px;
      background-color: ffffff;

      @media screen and (max-width: 780px) {
        padding: 0.3em;
        margin-left: 1.5rem;
        font-size: 1em;
      }

      @media screen and (max-width: 400px) {
        padding: 0.2em;
        margin-left: 1rem;
        font-size: 0.8em;
      }
    }

    label {
    }
  }
`;

export default InputBox;
