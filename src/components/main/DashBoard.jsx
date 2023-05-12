import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function DashBoard({ device }) {
  const navigate = useNavigate();
  console.log(device);
  console.log(device.name);
  const handleDeviceClick = () => {
    navigate(`/dht?deviceName=${device.name}&deviceId=${device.deviceId}`);
  };
  return (
    <Container>
      <DeviceInfo onClick={handleDeviceClick}>
        <DeviceName>{device.name}</DeviceName>
        <SerialNumber>{device.deviceId}</SerialNumber>
      </DeviceInfo>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;

  margin: 7rem 4rem;
  padding: 2rem;

  border-radius: 3rem;
  background-color: #c6a692;

  cursor: pointer;

  &:hover {
    scale: 1.03;
    transition: 0.2s ease-out;
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
  margin-bottom: 1.8rem;

  font-family: 'Jua';
  font-size: 2.6rem;
  color: #6c5d53;
`;

const SerialNumber = styled.span`
  display: block;
  text-align: center;
  font-family: 'Jua';
  font-size: 2.6rem;
  color: #8d8c8c;
`;
