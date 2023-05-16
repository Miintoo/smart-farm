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
  height: 7rem;

  background: #ffffff;

  ${mediaQuery[3]} {
    height: 6rem;
  }

  ${mediaQuery[1]} {
    height: 5rem;
  }
`;

const StatusImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 2rem;

  ${mediaQuery[1]} {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
  }
`;

const StatusMessage = styled.p`
  margin: 0.2rem 0 0 1.8rem;

  color: #c6a692;

  font-family: 'Jua', sans-serif;
  font-size: 2.5rem;
  line-height: 2.3rem;

  ${mediaQuery[1]} {
    margin-left: 1rem;

    font-size: 1.5rem;
    line-height: 1.3rem;
  }
`;

export default sensorStatus;
