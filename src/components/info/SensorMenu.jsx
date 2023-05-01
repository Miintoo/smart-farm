import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

function sensorMenu() {
  return (
    <NavWrapper>
      <UL>
        <Li>
          <NavLink to="/dht">온습도</NavLink>
        </Li>
        <Li>
          <NavLink to="/soil">토양수분</NavLink>
        </Li>
        <Li>
          <NavLink to="/lux">조도</NavLink>
        </Li>
      </UL>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 12vh;
`;

const UL = styled.ul`
  display: flex;
  gap: 10vw;
`;

const Li = styled.li`
  > a {
    padding: 1rem 2.5rem 0.7rem;

    color: #c6a692;

    font-family: 'Jua', sans-serif;
    font-size: 2.5rem;
    line-height: 3.125rem;
    text-decoration: none;

    &.active {
      border-radius: 20px;

      background: #c6a692;
      color: #ffffff;
    }
  }
`;

export default sensorMenu;
