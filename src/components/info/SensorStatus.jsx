import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../utils/breakPointUI';

function sensorStatus() {
  return (
    <Status>
      <StatusImage alt="좋음상태" src="images/smile.png" />
      <StatusMessage>좋음</StatusMessage>
    </Status>
  );
}

const Status = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 0.2rem solid #c6a692;
  border-radius: 1rem;
  width: 100%;
  height: 10rem;

  background: #ffffff;
  box-sizing: border-box;

  ${mediaQuery[2]} {
    height: 15rem;
  }
`;

const StatusImage = styled.img`
  margin-left: 3.6rem;

  ${mediaQuery[2]} {
    width: 5rem;
    height: 5rem;
  }

  ${mediaQuery[0]} {
    margin-left: 2.3rem;
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const StatusMessage = styled.p`
  margin: 0.3rem 0 0 2.5rem;

  color: #c6a692;

  font-family: 'Jua';
  font-size: 3.6rem;
  line-height: 4.5rem;

  ${mediaQuery[0]} {
    margin: 0.2rem 0 0 1.7rem;
    font-size: 2rem;
    line-height: 2rem;
  }
`;

export default sensorStatus;
