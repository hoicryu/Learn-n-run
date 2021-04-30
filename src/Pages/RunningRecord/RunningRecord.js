import React, { useState, useEffect } from "react";
import axios from "axios";

import RecordInput from "../../Components/RecordInput";
import Button from "../../Components/Button";
import { POST_NEWRECORD_API } from "../../Config"

import styled from "styled-components";

function RunningRecord(props) {
  const [myRecordData, setMyRecordData] = useState([]);
  const [date, setDate] = useState({});
  const [distance, setDistance] = useState({});
  const [pace, setPace] = useState({});
  const [cadence, setCadence] = useState({});

  useEffect(() => {
    getRecordData()
  }, []);

  const getRecordData = () => {
    try {
      fetch("Data/Record.json")
        .then((res) => res.json())
        .then((res) => setMyRecordData(res.records))
    } catch (err) {
      console.log(err)
    }
  }
  const setupInputValue = (e) => {
    try {
      if (e.target.name === "날짜") setDate(e.target.value)
      if (e.target.name === "거리") setDistance(e.target.value)
      if (e.target.name === "페이스") setPace(e.target.value)
      if (e.target.name === "케이던스") setCadence(e.target.value)
    } catch (err) {
      console.log(err)
    }
  };

  const postNewRecord = () => {
    try {
      axios
        .post(POST_NEWRECORD_API, {
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <RunningRecordWrapper>
      <MyrecordWrapper>
        <div>
          <span>날짜</span>
          <span>거리</span>
          <span>페이스</span>
          <span>케이던스</span>
        </div>
        {myRecordData?.map((record, idx) => {
          return (
            <div key={idx}>
              <span>{record.date}</span>
              <span>{record.distance} km</span>
              <span>{record.pace} min/km</span>
              <span>{record.cadence}</span>
            </div>
          )
        })}
      </MyrecordWrapper>
      <RecordInputWrapper>
        <RecordInput Name="날짜" inputType="date" setupInputValue={setupInputValue} />
        <RecordInput Name="거리" setupInputValue={setupInputValue} />
        <RecordInput Name="페이스" setupInputValue={setupInputValue} />
        <RecordInput Name="케이던스" setupInputValue={setupInputValue} />
      </RecordInputWrapper>
      <Button buttonName="등록" runFunction={postNewRecord} />
    </RunningRecordWrapper>
  );
}

const RunningRecordWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
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

const MyrecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin-bottom: 2em;
  border: 1px solid white;
  
  div{
    display: flex;
    width: 30em;
    
    span{
      margin-left: 1em;
      width: 25%;
      margin-bottom: 1em;
    }
  }
  
`;

export default RunningRecord;
