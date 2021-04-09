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

  return (
    <MainRankWrapper>
      <h1>Run In Ranking</h1>
      <RankerArea>
        <RankerWrapper>
          <div>
            <h2>1위</h2>

            <img src="/images/man.png" alt="topRanker" />
            <TopRankerInfo>
              <p>{manTopRankers?.name}</p>
              <p>{manTopRankers?.distance} km</p>
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
            <img src="/images/woman.png" alt="topRanker" />
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

const MainRankWrapper = styled.div`
  width: 65%;
  margin-left: 3%;
  @media screen and (max-width: 780px) {
    width: 100%;
    margin-left: 0;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    padding: 1rem;
    text-align: center;
    font-size: 2.2rem;

    @media screen and (max-width: 780px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1rem;
    }
  }
`;

const RankerArea = styled.div`
  display: flex;
`;

const RankerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 0.3rem;
    text-align: center;
    font-size: 1.2rem;
    @media screen and (max-width: 780px) {
      font-size: 1rem;
    }
  }

  h2 {
    padding: 2rem 0rem 2rem 0rem;
    text-align: center;
    font-size: 1.8em;

    @media screen and (max-width: 780px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1rem;
    }
  }

  img {
    width: 13em;

    @media screen and (max-width: 780px) {
      width: 10em;
    }
    @media screen and (max-width: 400px) {
      width: 18em;
    }
  }
`;

const TopRankerInfo = styled.div`
  padding: 2rem 0rem 2rem 0rem;
`;

const RankerBox = styled.article`
  display: flex;
  width: 20em;
  margin-right: 5%;

  span {
    width: 23%;
    padding: 0.3em;
    font-size: 0.8em;
    &:nth-child(1) {
      text-align: end;
    }
    &:nth-child(2) {
      text-align: center;
    }
    &:last-child {
      width: 31%;
    }
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export default MainRank;
