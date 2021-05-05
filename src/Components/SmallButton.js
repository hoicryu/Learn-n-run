import React from "react";

import styled from "styled-components";

function SmallButton({ buttonName, name, runFunction }) {
  return (
    <SmallButtonWrapper>
      <button name={name} onClick={runFunction} width="100">
        {buttonName}
      </button>
    </SmallButtonWrapper>
  );
}

const SmallButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0.2em;
    padding: 0.5em;
    font-size: 0.8em;
    border: 1px solid #ebebeb;
    border-radius: 10px;

    @media screen and (max-width: 780px) {
      padding: 0.4em;
      font-size: 0.7em;
    }

    @media screen and (max-width: 400px) {
      padding: 0.3em;
      font-size: 0.5em;
    }
  }
`;



export default SmallButton;