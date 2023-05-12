import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../utils/breakPointUI';

export default function DeviceItem({ device }) {
  return (
    <Container>
      <DeviceInfo>
        <DeviceName>{device.name}</DeviceName>
        <SerialNumber>{device.deviceId}</SerialNumber>
      </DeviceInfo>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  width: 17rem;
  height: 17rem;
  padding: 2rem;
  margin: 6rem 4rem;
  border-radius: 3rem;

  background-color: #c6a692;

  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    scale: 1.03;
  }

  ${mediaQuery[2]} {
    width: 18.6rem;
    height: 18.6rem;
  }

  ${mediaQuery[1]} {
    width: 21rem;
    height: 21rem;
  }
`;

const DeviceInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const DeviceName = styled.span`
  display: block;
  width: 16rem;
  margin-bottom: 1.4rem;

  color: #6c5d53;

  font-family: 'Jua';
  font-size: 2.6rem;
  text-align: center;

  ${mediaQuery[1]} {
    font-size: 2rem;
  }
`;

const SerialNumber = styled.span`
  display: block;

  color: #8d8c8c;

  font-family: 'Jua';
  font-size: 2.6rem;
  text-align: center;
`;
