import React, { useState, useEffect } from "react";

import axios from "axios";

import RecordInput from "../../Components/RecordInput";
import Button from "../../Components/Button";

import styled from "styled-components";

function RunningRecord(props) {
  const [ranking, setRanking] = useState({});
  const [name, setName] = useState({});
  const [distance, setDistance] = useState({});
  const [pace, setPace] = useState({});
  const [cadence, setCadence] = useState({});

  const setupInputValue = (e) => { };

  return (
    <RunningRecordWrapper>
      <RecordInputWrapper>
        <RecordInput Name="날짜" inputType="date" />
        <RecordInput Name="이름" />
        <RecordInput Name="거리" />
        <RecordInput Name="페이스" />
        <RecordInput Name="케이던스" />
      </RecordInputWrapper>
      <Button buttonName="등록" />
    </RunningRecordWrapper>
  );
}

const RunningRecordWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: flex-end;
  width: 50em;
  flex-wrap:wrap;

  @media screen and (max-width: 780px) {
    width: 30em;
    flex-direction:column;
    align-items:center;
  }

  @media screen and (max-width: 400px) {
    
    width: 23em;
  }

  Button{
    margin-bottom: 0.8em;
  }
`;

const RecordInputWrapper = styled.div`
  display: flex;
`;

export default RunningRecord;
