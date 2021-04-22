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

  const setupInputValue = (e) => {};

  return (
    <RunningRecordWrapper>
      <RecordInput Name="이름" />
      <RecordInput Name="거리" />
      <RecordInput Name="페이스" />
      <RecordInput Name="케이던스" />
    </RunningRecordWrapper>
  );
}

const RunningRecordWrapper = styled.div`
  display: flex;
  width: 65vw;
  margin-left: 8%;
`;

export default RunningRecord;
