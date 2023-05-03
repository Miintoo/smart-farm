import React from 'react';
import styled from '@emotion/styled';
import SensorMenu from '../../components/info/SensorMenu';
import SensorStatus from '../../components/info/SensorStatus';

export default function DHTInfo() {
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
