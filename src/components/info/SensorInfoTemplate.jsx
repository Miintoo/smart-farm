import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import SensorMenu from './SensorMenu';
import SensorStatus from './SensorStatus';
import SensorOnOff from './SensorOnOff';
import SensorInfo from './SensorInfo';
import Sidebar from '../common/Sidebar';
import mediaQuery from '../../utils/breakPointUI';

export default function SensorInfoTemplate({ deviceName, sensorName, unit, sensorData }) {
  const [isDht, setIsDht] = useState(false);
  const dhtProps = isDht ? { dht: true } : {};

  useEffect(() => {
    if (sensorName === '온습도') {
      setIsDht(true);
    }
  }, []);

  return (
    <>
      {/* <Container> */}
      <Sidebar />
      <InfoContainer>
        <SensorMenu />
        <Wrapper>
          <DeviceName>디바이스: {deviceName}</DeviceName>
          <SensorStatusWrapper {...dhtProps}>
            <SensorStatus />
            {isDht ? '' : <SensorOnOff actuatorType="펌프" />}
          </SensorStatusWrapper>
          <SensorInfoWrapper {...dhtProps}>
            <InfoModal>
              {sensorName} 정보
              <img alt={`${sensorName} 정보`} src="/images/question.png" />
              <img alt={`${sensorName} 상세`} src="/images/rightArrow.png" />
            </InfoModal>
            <GraphWrapper>
              {isDht ? (
                <>
                  <SensorInfo sensorData={sensorData[0]} sensorName="온도" unit="º" />
                  <SensorInfo sensorData={sensorData[1]} sensorName="습도" unit="%" />
                </>
              ) : (
                <SensorInfo sensorData={sensorData} sensorName={sensorName} unit={unit} />
              )}
            </GraphWrapper>
          </SensorInfoWrapper>
        </Wrapper>
      </InfoContainer>
      {/* </Container> */}
    </>
  );
}

SensorInfoTemplate.propTypes = {
  deviceName: PropTypes.string.isRequired,
  sensorName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  unit: PropTypes.string.isRequired,
  sensorData: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired
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

const SensorStatusWrapper = styled.div`
  position: absolute;

  display: flex;
  width: calc(100% - 4.8rem);
  height: 10rem;
  margin: 5.6rem 2.4rem;

  ${mediaQuery[2]} {
    flex-direction: column;
    gap: 1rem;

    height: ${(props) => (props.dht ? '12%' : '22%')};
  }

  ${mediaQuery[0]} {
    margin: 4.8rem 2.4rem;
    height: ${(props) => (props.dht ? '10%' : '23%')};
  }
`;

const SensorInfoWrapper = styled.div`
  position: absolute;

  width: calc(100% - 4.8rem);
  height: calc(85vh - 19.5rem);
  border: 0.2rem solid #c6a692;
  border-radius: 1rem;
  margin: 17.2rem 2.4rem 0;

  background: #ffffff;

  ${mediaQuery[2]} {
    bottom: 2.5rem;
    height: ${(props) => (props.dht ? 'calc(85vh - 12% - 9.5rem)' : 'calc(85vh - 22% - 9.5rem)')};
  }

  ${mediaQuery[0]} {
    bottom: 2.5rem;
    height: ${(props) => (props.dht ? 'calc(85vh - 9% - 9.5rem)' : 'calc(85vh - 21% - 9.5rem)')};
  }
`;

const InfoModal = styled.div`
  position: absolute;
  right: 10rem;

  margin-top: 2.6rem;

  color: #c6a692;

  font-family: 'Jua', sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;

  > img:first-of-type {
    position: absolute;

    margin: -0.1rem 0 0 1rem;

    cursor: pointer;
  }

  > img:last-child {
    position: absolute;

    margin: -0.1rem 0 0 5.4rem;

    cursor: pointer;
  }

  ${mediaQuery[0]} {
    right: 7rem;
    margin-top: 1.5rem;

    font-size: 1.4rem;
    line-height: 1.5rem;

    > img:first-of-type {
      width: 1.8rem;
      height: 1.8rem;
      margin-top: -0.3rem;
    }

    > img:last-child {
      width: 1.5rem;
      height: 1.5rem;
      margin: -0.2rem 0 0 4rem;
    }
  }
`;

const GraphWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 4.8rem);
  height: 85%;
  margin: 5rem 0 0 2.4rem;

  ${mediaQuery[2]} {
    flex-direction: column;
    justify-content: space-evenly;
  }

  ${mediaQuery[0]} {
    margin-top: 3rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
