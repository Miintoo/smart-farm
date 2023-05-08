import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import SensorMenu from './SensorMenu';
import SensorStatus from './SensorStatus';
import SensorOnOff from './SensorOnOff';
import SensorInfo from './SensorInfo';

export default function SensorInfoTemplate({ deviceName, sensorName, unit, sensorData }) {
  return (
    <>
      <SensorMenu />
      <Wrapper>
        <DeviceName>디바이스: {deviceName}</DeviceName>
        <SensorStatusWrapper>
          {sensorName !== '토양수분' && sensorName !== '조도' ? (
            <SensorStatus />
          ) : (
            <>
              <SensorStatus />
              <SensorOnOff actuatorType="펌프" />
            </>
          )}
        </SensorStatusWrapper>
        <SensorInfoWrapper>
          <InfoModal>
            {sensorName} 정보
            <img alt={`${sensorName} 정보`} src="/images/question.png" />
          </InfoModal>
          <GraphWrapper>
            {sensorName !== '토양수분' && sensorName !== '조도' ? (
              <>
                <SensorInfo sensorData={sensorData[0]} sensorName={sensorName[0]} unit={unit} />
                <SensorInfo sensorData={sensorData[1]} sensorName={sensorName[1]} unit={unit} />
              </>
            ) : (
              <SensorInfo sensorData={sensorData} sensorName={sensorName} unit={unit} />
            )}
          </GraphWrapper>
        </SensorInfoWrapper>
      </Wrapper>
    </>
  );
}

SensorInfoTemplate.propTypes = {
  deviceName: PropTypes.string.isRequired,
  sensorName: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  sensorData: PropTypes.number.isRequired
};
const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 85vh;
  border-radius: 1rem;
  margin: 0 auto;
  max-width: 129.6rem;

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

const SensorStatusWrapper = styled.div`
  position: absolute;

  display: flex;
  width: calc(100% - 4.8rem);
  height: 10rem;
  margin: 5.6rem 2.4rem;
`;

const SensorInfoWrapper = styled.div`
  position: absolute;

  width: calc(100% - 4.8rem);
  height: 76%;
  border: 0.2rem solid #c6a692;
  border-radius: 1rem;
  margin: 17.2rem 2.4rem;

  background: #ffffff;
`;

const InfoModal = styled.div`
  position: absolute;
  right: 10rem;

  margin-top: 2.6rem;

  color: #c6a692;

  font-family: 'Jua', sans-serif;
  font-size: 2rem;
  line-height: 2.5rem;

  > img {
    position: absolute;

    margin: -0.1rem 0 0 1rem;

    cursor: pointer;
  }
`;

const GraphWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 4.8rem);
  height: 85%;
  margin: 7rem 0 0 2.4rem;
`;
