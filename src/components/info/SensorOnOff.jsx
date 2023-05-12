import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export default function SensorOnOff({ actuatorType }) {
  const actuatorState = 1; // actuator on/off 값 받아와서 useState로 관리 0: 꺼짐, 1: 켜짐
  const onOffStatus = [
    {
      imgUrl: 'images/Off.png',
      onOffMessage: `${actuatorType} 꺼짐`
    },
    {
      imgUrl: 'images/On.png',
      onOffMessage: `${actuatorType} 켜짐`
    }
  ];

  return (
    <Status>
      <StatusImage alt="펌프상태" src={onOffStatus[actuatorState].imgUrl} />
      <StatusMessage isActive={actuatorState}>{onOffStatus[actuatorState].onOffMessage}</StatusMessage>
    </Status>
  );
}

SensorOnOff.propTypes = {
  actuatorType: PropTypes.string.isRequired
};

const Status = styled.button`
  display: flex;
  align-items: center;
  border: 0.2rem solid #c6a692;
  border-radius: 1rem;
  width: 100%;
  height: 7rem;

  margin-left: 1.6rem;

  background: #ffffff;

  cursor: pointer;
  box-sizing: border-box;
`;

const StatusImage = styled.img`
  width: 4.4rem;
  height: 4rem;
  margin-left: 2rem;
`;

const StatusMessage = styled.p`
  margin: 0.2rem 0 0 1.8rem;

  color: ${(props) => (props.isActive ? '#c6a692' : '#A9A8A8')};

  font-family: 'Jua', sans-serif;
  font-size: 2.5rem;
  line-height: 2.3rem;
`;
