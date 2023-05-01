import React from 'react';
import styled from '@emotion/styled';
import SensorMenu from '../../components/info/SensorMenu';
import SensorStatus from '../../components/info/SensorStatus';

function DHTInfo() {
  const deviceName = '상추';
  return (
    <>
      <SensorMenu />
      <Wrapper>
        <DeviceName>디바이스: {deviceName}</DeviceName>
        <SensorInfoWrapper>
          <SensorStatus />
        </SensorInfoWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  height: 85vh;
  margin: 0 auto;
  background: #f0e7e2;
  border-radius: 8px;
`;

const DeviceName = styled.p`
  position: relative;
  width: 100%;
  font-family: 'Jua';
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: #c6a692;
  padding-top: 2%;
  margin-left: 3%;
`;

const SensorInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  margin-top: 1.5%;
  width: 87%;
  height: 12%;
`;

export default DHTInfo;
