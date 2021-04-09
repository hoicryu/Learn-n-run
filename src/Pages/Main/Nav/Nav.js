import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Nav(props) {
  const [navData, setNavData] = useState([
    { id: 0, menu: "login" },
    { id: 1, menu: "myPage" },
    { id: 2, menu: "aboutCrew" },
    { id: 3, menu: "members" },
    { id: 4, menu: "ranking" },
    { id: 5, menu: "story" },
    { id: 6, menu: "forum" },
  ]);

  const [translateX, setTranslateX] = useState(0);

  const [translateY, setTranslateY] = useState(0);

  const sortMenu = (e) => {
    let NavMenu = [...navData];

    if (e.target.id < 3) {
      let num = 3 - e.target.id;
      while (num !== 0) {
        let popedNavMenu = NavMenu.pop();
        NavMenu.unshift(popedNavMenu);
        num--;
      }
      setNavData(NavMenu);
    }
    if (e.target.id > 3) {
      let num = Math.abs(3 - e.target.id);
      while (num !== 0) {
        let popedNavMenu = NavMenu.shift();
        NavMenu.push(popedNavMenu);
        num--;
      }
      setNavData(NavMenu);
    }
  };

  const navTransForm = () => {
    console.log("생각중");
  };

  return (
    <NavArea>
      <NavWrapper className="slide_wrap">
        {navData.length &&
          navData.map((navData, idx) => {
            return (
              <NavBox className="slide_box">
                <NavMenu id={idx} key={navData.id} onClick={sortMenu}>
                  {navData.menu}
                </NavMenu>
              </NavBox>
            );
          })}
      </NavWrapper>
    </NavArea>
  );
}

const NavArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
  width: 35%;
  height: 100vh;
  overflow-y: hidden;

  @media screen and (max-width: 780px) {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    margin-right: 0%;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 140%;
  .go {
    transform: translateY(30px) 2s;
  }

  @media screen and (max-width: 780px) {
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
`;

const NavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  font-size: 3rem;

  @media screen and (max-width: 780px) {
    font-size: 1.5rem;
    width: 210px;
    height: auto;
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
    width: 100px;
    padding-left: 60px;
    padding-right: 60px;
  }

  :nth-child(4) {
    font-size: 4rem;
    transition: 1s;

    @media screen and (max-width: 780px) {
      font-size: 2.3rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }
`;

const NavMenu = styled.p`
  cursor: pointer;
  font-family: "Indie Flower", cursive;
  @media screen and (max-width: 780px) {
    text-align: center;
  }
`;

export default Nav;
