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
  border: 0.125rem solid #c6a692;
  border-radius: 0.625rem;
  width: 100%;
  height: 100%;
  margin-left: 3%;

  background: #ffffff;
`;

const StatusImage = styled.img`
  margin-left: 5%;
`;

const StatusMessage = styled.p`
  margin: 0.4% 0 0 3%;

  color: #c6a692;

  font-family: 'Jua';
  font-size: 2.25rem;
  line-height: 2rem;
`;

export default sensorStatus;
