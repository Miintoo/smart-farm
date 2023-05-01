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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 2px solid #c6a692;
  background: #ffffff;
  border-radius: 10px;
  margin-left: 3%;
  height: 100%;
  width: 100%;
`;

const StatusImage = styled.img`
  margin-left: 3%;
`;

const StatusMessage = styled.p`
  font-family: 'Jua';
  font-size: 2.25rem;
  line-height: 2rem;
  color: #c6a692;
  margin: 0.4% 0 0 2%;
`;

export default sensorStatus;
