import React from "react";

import styled from "styled-components";

function Button({ buttonName, color, runFunction }) {
  return (
    <ButtonBox>
      <button onClick={runFunction}>{buttonName}</button>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0.2em;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    background-color: fffff;

    @media screen and (max-width: 780px) {
      padding: 0.3em;
      font-size: 0.8em;
    }

    @media screen and (max-width: 400px) {
      padding: 0.1em;
      font-size: 0.3em;
    }
  }
`;

export default Button;
