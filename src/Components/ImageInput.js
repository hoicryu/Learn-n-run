import React from "react";

import styled from "styled-components";

function ImageInput({
  Name,
  inputName,
  inputType,
  inputValue,
  setupInputValue,
}) {
  return (
    <ImageInputWrapper>
      <p>{Name}</p>
      <div>
        <input
          onChange={setupInputValue}
          type="file"
          name={inputName}
          value={inputValue}
        ></input>
      </div>
    </ImageInputWrapper>
  );
}

const ImageInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.2rem 1.2rem 0;
  width: 20rem;
  

  @media screen and (max-width: 780px) {
    width: 15rem;
    padding: 0.8rem 0.8rem 0.8rem 0;
  }

  @media screen and (max-width: 400px) {
    width: 10rem;
    padding: 0.6rem 0.6rem 0.6rem 0;
  }
  p {
    width: 40%;
    font-size: 0.8em;

    @media screen and (max-width: 780px) {
      font-size: 0.7em;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.6em;
    }
  }

  div {
    display: flex;
    width: 50%;

    input {
      width:50%;
      margin-left: 0.8rem;
      font-size: 0.8em;
      border: 1px solid #ebebeb;
      background-color: white;

      @media screen and (max-width: 780px) {
        padding: 0.3em;
        margin-left: 0.6rem;
        font-size: 0.8em;
      }

      @media screen and (max-width: 400px) {
        padding: 0.1em;
        margin-left: 0.5rem;
        font-size: 0.5em;
      }
    }
  }
`;

export default ImageInput;