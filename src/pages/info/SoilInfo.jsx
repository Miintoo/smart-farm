import React from 'react';
import styled from '@emotion/styled';
import SensorMenu from '../../components/info/SensorMenu';
import SensorStatus from '../../components/info/SensorStatus';
import SensorOnOff from '../../components/info/SensorOnOff';
import SensorInfo from '../../components/info/SensorInfo';

export default function SoilInfo() {
  const deviceName = '상추';
  return (
    <>
      <SensorMenu />
      <Wrapper>
        <DeviceName>디바이스: {deviceName}</DeviceName>
        <SensorInfoWrapper>
          <SensorStatus />
          <SensorOnOff actuatorType="펌프" />
        </SensorInfoWrapper>
        <SensorGraphWrapper>
          <SensorInfo />
        </SensorGraphWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 85vh;
  border-radius: 1rem;
  margin: 0 auto;

  background: #f0e7e2;
`;

const DeviceName = styled.p`
  position: absolute;

  width: 100%;
  margin: 1.7rem 0 0 2.6rem;

  color: #c6a692;

  font-family: 'Jua';
  font-size: 2.4rem;
  line-height: 3rem;
`;

const SensorInfoWrapper = styled.div`
  position: absolute;

  display: flex;
  width: calc(100% - 4.8rem);
  height: 10rem;
  margin: 5.6rem 2.4rem;
`;

const SensorGraphWrapper = styled.div`
  position: absolute;

  width: calc(100% - 4.8rem);
  height: 76%;
  margin: 17.2rem 2.4rem;
`;
