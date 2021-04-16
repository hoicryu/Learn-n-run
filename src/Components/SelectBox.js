import React from "react";

import styled from "styled-components";

function SelectBox({ setupSelectedOption, optionList, Name, selectName }) {
  return (
    <SelectWrapper>
      <p>{Name}</p>
      <select onChange={setupSelectedOption} name={selectName}>
        {optionList.map((el, idx) => {
          return <option key={idx}>{el}</option>;
        })}
      </select>
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.2rem 1.2rem 0;
  width: 25rem;

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
    font-size: 1em;

    @media screen and (max-width: 780px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.6em;
    }
  }

  select {
    width: 40%;
    padding: 0.5em;
    margin-left: 2rem;
    font-size: 1em;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    background-color: ffffff;

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
`;

export default SelectBox;
