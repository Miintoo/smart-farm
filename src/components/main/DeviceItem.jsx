import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import mediaQuery from '../../utils/breakPointUI';
import instance from '../../utils/auth/interceptor';

export default function DeviceItem({ device, keyValue, onDeleteDevice }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await instance.put('/devices', { deviceId: device.deviceId });
      onDeleteDevice(device.deviceId);
    } catch (error) {
      Error('올바른 요청이 아닙니다.');
    }
  };

  const handleDeviceClick = () => {
    navigate(`/dht?deviceName=${device.name}&deviceId=${device.deviceId}`);
  };

  return (
    <Container key={keyValue}>
      <CancelButton src="/images/cancel.png" alt="취소 버튼" onClick={handleDelete} />
      <DeviceInfo onClick={handleDeviceClick}>
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

const CancelButton = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 1.8rem;
  height: 2.5rem;

  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    opacity: 0.4;
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
