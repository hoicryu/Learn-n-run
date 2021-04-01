import React, { useState, useEffect } from "react";

import styled from "styled-components";

function MainRank(props) {
  const [rankData, setRankData] = useState({ mans: [] });
  const [topRanker, setTopRanker] = useState([]);
  const [rankers, setRankers] = useState([]);

  useEffect(() => {
    getRankData();
  }, []);

  useEffect(() => {
    sliceRankData();
  }, [rankData]);

  const getRankData = () => {
    fetch("Data/Rank.json")
      .then((res) => res.json())
      .then((result) => setRankData(result));
  };

  const sliceRankData = () => {
    let TopRanker = rankData.mans.slice(0, 1);
    setTopRanker(TopRanker);
  };

  console.log(topRanker);

  const MainRankWrapper = true ? MainRankWrapper1 : MainRankWrapper2;
  const { mans, womans } = rankData;
  return (
    <MainRankWrapper>
      <h1>Run In Ranking</h1>
      <div>
        <img src={topRanker[0].img}></img>
      </div>
      <RankerArea>
        <RankerWrapper>
          {mans?.map((data, idx) => {
            return (
              <RankerBox key={idx}>
                <p>{data.name}</p>
                <p>{data.distance}km</p>
                <p>
                  {data.pace.min}:{data.pace.second} min/km
                </p>
              </RankerBox>
            );
          })}
        </RankerWrapper>
        <RankerWrapper>
          {womans?.map((data, idx) => {
            return (
              <RankerBox key={idx}>
                <p>{data.name}</p>
                <p>{data.distance}km</p>
                <p>
                  {data.pace.min}:{data.pace.second} min/km
                </p>
              </RankerBox>
            );
          })}
        </RankerWrapper>
      </RankerArea>
    </MainRankWrapper>
  );
}

const MainRankWrapper1 = styled.div`
  background-color: red;
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
`;

const RankerBox = styled.div`
  display: flex;
  background-color: pink;
  border: 1px solid;
`;

export default MainRank;
