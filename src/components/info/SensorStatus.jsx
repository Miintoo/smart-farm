import React from 'react';
import styled from '@emotion/styled';

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
  height: 100%;

  background: #ffffff;
`;

const StatusImage = styled.img`
  margin-left: 3.6rem;
`;

const StatusMessage = styled.p`
  margin: 0.3rem 0 0 2.5rem;

  color: #c6a692;

  font-family: 'Jua';
  font-size: 3.6rem;
  line-height: 4.5rem;
`;

export default sensorStatus;
