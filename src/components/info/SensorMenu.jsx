import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import mediaQuery from '../../utils/breakPointUI';

function sensorMenu({ menuType }) {
  let customLink = [];

  if (menuType === 'info') {
    customLink = ['/dht', '/soil', '/lux'];
  } else {
    // menuType === "detail"
    customLink = ['/dht/detail', '/soil/detail', '/lux/detail'];
  }

  return (
    <NavWrapper>
      <UL>
        <Li>
          <NavLink to={customLink[0]}>온습도</NavLink>
        </Li>
        <Li>
          <NavLink to={customLink[1]}>토양수분</NavLink>
        </Li>
        <Li>
          <NavLink to={customLink[2]}>조도</NavLink>
        </Li>
      </UL>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 14vh;
  margin: 0 auto;
`;

const UL = styled.ul`
  display: flex;
  gap: 7vw;
`;

const Li = styled.li`
  > a {
    padding: 1rem 2rem 0.8rem;

    color: #c6a692;

    font-family: 'Jua', sans-serif;
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-decoration: none;

    &.active {
      border-radius: 1.5rem;

      background: #c6a692;
      color: #ffffff;
    }

    ${mediaQuery[2]} {
      font-size: 3rem;
      line-height: 2.5rem;
    }

    ${mediaQuery[1]} {
      padding: 0.9rem 1rem 0.5rem;
      font-size: 2.8rem;
      line-height: 2.3rem;

      &.active {
        border-radius: 1.3rem;
      }
    }

    ${mediaQuery[0]} {
      padding: 0.7rem 1rem 0.5rem;
      font-size: 2rem;
      line-height: 2rem;

      &.active {
        border-radius: 1.1rem;
      }
    }
  }
`;

export default sensorMenu;
