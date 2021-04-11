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
  align-items: center;
  padding: 1.5rem 1.5rem 1.5rem 0;

  p {
    width: 8em;
    font-size: 1.2em;
  }

  div {
    display: flex;

    input {
      padding: 0.5em;
      margin-left: 2rem;
      font-size: 1.2em;
      background-color: ffffff;
      border: 1px solid #ebebeb;
      border-radius: 10px;
    }

    label {
    }
  }
`;

export default InputBox;
