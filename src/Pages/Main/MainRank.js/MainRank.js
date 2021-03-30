import React from "react";

function MainRank(props) {
  const [rankData, setRankData] = useState([]);

  useEffect(() => {
    getRankData();
  }, []);

  const getRankData = () => {
    fetch("Data/Rank.json")
      .then((res) => res.json())
      .then((result) => setBasicData());
  };

  return (
    <div>
      <h1>Run In Ranking</h1>
      <div>
        <div></div>
      </div>
    </div>
  );
}
export default MainRank;
