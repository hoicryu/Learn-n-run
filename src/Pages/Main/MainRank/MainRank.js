import React, { useState, useEffect } from "react";

import styled from "styled-components";

function MainRank(props) {
  const [manTopRankers, setManTopRankers] = useState({});
  const [womanTopRankers, setWomanTopRankers] = useState({});

  const [mansrankers, setManRankers] = useState([]);
  const [womanrankers, setWomanRankers] = useState([]);
  useEffect(() => {
    getRankData();
  }, []);

  const getRankData = () => {
    fetch("Data/Rank.json")
      .then((res) => res.json())
      .then((result) => setRankData(result));
  };

  const setRankData = (data) => {
    let manTopRankers = data.mans[0];
    let womanTopRankers = data.womans[0];
    let manRankers = data.mans.slice(1, data.mans.length);
    let womanRankers = data.womans.slice(1, data.mans.length);
    setManTopRankers(manTopRankers);
    setWomanTopRankers(womanTopRankers);
    setManRankers(manRankers);
    setWomanRankers(womanRankers);
  };

  const MainRankWrapper = true ? MainRankWrapper1 : MainRankWrapper2;
  return (
    <MainRankWrapper>
      <h1>Run In Ranking</h1>
      <RankerArea>
        <RankerWrapper>
          <div>
            <h2>1위</h2>
            <img src="/images/man.png" alt="topRanker" width="300rem"></img>
            <TopRankerInfo>
              <p>{manTopRankers?.name}</p>
              <p>{manTopRankers?.distance}km</p>
              <p>
                {manTopRankers.pace?.min}:{manTopRankers.pace?.second} min/km
              </p>
            </TopRankerInfo>
          </div>
          {mansrankers?.map((data, idx) => {
            return (
              <RankerBox key={idx}>
                <span>{data.rank}위</span>
                <span>{data.name}</span>
                <span>{data.distance} km</span>
                <span>
                  {data.pace.min}:{data.pace.second} min/km
                </span>
              </RankerBox>
            );
          })}
        </RankerWrapper>
        <RankerWrapper>
          <div>
            <h2>1위</h2>
            <img src="/images/man.png" alt="topRanker" width="300rem"></img>
            <TopRankerInfo>
              <p>{womanTopRankers?.name}</p>
              <p>{womanTopRankers?.distance} km</p>
              <p>
                {womanTopRankers.pace?.min}:{womanTopRankers.pace?.second}{" "}
                min/km
              </p>
            </TopRankerInfo>
          </div>
          {womanrankers?.map((data, idx) => {
            return (
              <RankerBox key={idx}>
                <span>{data.rank}위</span>
                <span>{data.name}</span>
                <span>{data.distance}km</span>
                <span>
                  {data.pace.min}:{data.pace.second} min/km
                </span>
              </RankerBox>
            );
          })}
        </RankerWrapper>
      </RankerArea>
    </MainRankWrapper>
  );
}

const MainRankWrapper1 = styled.div`
  padding: 5rem;
  background-color: red;
  h1 {
    padding: 1rem;
    text-align: center;
    font-size: 2.5rem;
  }
`;
const MainRankWrapper2 = styled.div`
  background-color: blue;
`;

const RankerArea = styled.div`
  display: flex;
`;

const RankerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;

  h1 {
  }

  p {
    padding: 0.3rem;
    text-align: center;
    font-size: 1.3rem;
    background-color: violet;
  }

  h2 {
    padding: 1rem 0rem 1rem 0rem;
    text-align: center;
    font-size: 2rem;
  }
`;

const TopRankerInfo = styled.div`
  padding: 2rem 0rem 2rem 0rem;
`;

const RankerBox = styled.article`
  display: flex;
  width: 100%;
  background-color: pink;
  border: 1px solid;

  span {
    padding: 0.5rem;
    margin-left: 10px;
  }
`;

export default MainRank;
