import React, { useState } from "react";
import styled from "styled-components";

function Nav(props) {
  const [navData, setNavData] = useState([
    { id: 0, menu: "login" },
    { id: 1, menu: "my page" },
    { id: 2, menu: "about crew" },
    { id: 3, menu: "members" },
    { id: 4, menu: "ranking" },
    { id: 5, menu: "story" },
    { id: 6, menu: "forum" },
  ]);

  const sortMenu = (e) => {
    let NavMenu = navData;
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

  return (
    <NavWrapper className="slide_wrap">
      <NavBox className="slide_box">
        <NavList className="slide_list">
          {navData.length &&
            navData.map((navData, idx) => {
              return (
                <NavMenu onClick={sortMenu} id={idx} key={idx}>
                  {navData.menu}
                </NavMenu>
              );
            })}
        </NavList>
      </NavBox>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const NavBox = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: hidden;
`;

const NavList = styled.div``;

const NavMenu = styled.p`
  cursor: pointer;
  font-size: 8rem;
  font-family: "Indie Flower", cursive;
`;

export default Nav;
