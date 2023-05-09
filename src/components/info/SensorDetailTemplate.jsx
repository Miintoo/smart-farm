import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import SensorMenu from './SensorMenu';
import Sidebar from '../common/Sidebar';
import mediaQuery from '../../utils/breakPointUI';

export default function SensorDetailTemplate({ deviceName }) {
  return (
    <>
      {/* <Container> */}
      <Sidebar />
      <InfoContainer>
        <SensorMenu menuType="detail" />
        <Wrapper>
          <DeviceName>디바이스: {deviceName}</DeviceName>
        </Wrapper>
      </InfoContainer>
      {/* </Container> */}
    </>
  );
}

SensorDetailTemplate.propTypes = {
  deviceName: PropTypes.string.isRequired
};

const InfoContainer = styled.div`
  width: 83vw;
  height: 100vh;
  margin-left: 17vw;

  ${mediaQuery[3]} {
    width: 100vw;
    margin-left: 0;
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 75vw;
  height: 85vh;
  border-radius: 1rem;
  margin: 0 auto;
  max-width: 129.6rem;

  background: #f0e7e2;

  ${mediaQuery[3]} {
    width: 90vw;
  }
`;

const DeviceName = styled.p`
  position: absolute;

  width: 100%;
  margin: 1.7rem 0 0 2.6rem;

  color: #c6a692;

  font-family: 'Jua';
  font-size: 2.4rem;
  line-height: 3rem;

  ${mediaQuery[0]} {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;
