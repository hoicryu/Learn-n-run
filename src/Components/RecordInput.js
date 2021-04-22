import React from "react";

import styled from "styled-components";

function RecordInput({
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
}) {
  return (
    <InputWrapper>
      <label>{Name}</label>
      <input
        onChange={setupInputValue}
        type={inputType}
        placeholder={inputPlaceHolder}
        name={inputName}
      ></input>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  @media screen and (max-width: 780px) {
    padding: 0.8em;
  }

  @media screen and (max-width: 400px) {
    padding: 0.6em;
  }

  label {
    margin-bottom: 0.5em;
  }

  input {
    padding: 0.3em;
    width: 6em;
    font-size: 1em;
    border: 1px solid #ebebeb;
    border-radius: 10px;

    @media screen and (max-width: 780px) {
      padding: 0.3em;
      font-size: 0.8em;
    }

    @media screen and (max-width: 400px) {
      padding: 0.1em;
      font-size: 0.5em;
    }
  }
`;

export default RecordInput;
