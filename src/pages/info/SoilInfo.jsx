import React from 'react';
import styled from '@emotion/styled';
import SensorMenu from '../../components/info/SensorMenu';
import SensorStatus from '../../components/info/SensorStatus';
import SensorOnOff from '../../components/info/SensorOnOff';

function SoilInfo() {
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
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 90vw;
  height: 85vh;
  border-radius: 0.5rem;
  margin: 0 auto;

  background: #f0e7e2;
`;

const DeviceName = styled.p`
  position: relative;

  width: 100%;
  padding-top: 2%;
  margin-left: 3%;

  font-family: 'Jua';
  font-size: 1.5rem;
  line-height: 1.875rem;

  color: #c6a692;
`;

const SensorInfoWrapper = styled.div`
  position: absolute;

  display: flex;
  width: 87%;
  height: 12%;
  margin-top: 1.5%;
`;

export default SoilInfo;
