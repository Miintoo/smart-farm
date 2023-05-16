import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import mediaQuery from '../../utils/breakPointUI';
import instance from '../../utils/auth/interceptor';

export default function SensorOnOff({ actuatorType, actuatorStatus }) {
  const location = useLocation();
  const [actuator, setActuator] = useState(actuatorStatus);

  console.log('SensorOnOff', actuatorStatus);
  const query = queryString.parse(location.search);
  const { deviceId } = query;

  const onOffStatus = [
    {
      imgUrl: 'images/Off.png',
      onOffMessage: `${actuatorType} 꺼짐`
    },
    {
      imgUrl: 'images/On.png',
      onOffMessage: `${actuatorType} 켜짐`
    }
  ];

  const sensor = actuatorType === '펌프' ? 'solid' : 'lux';

  const handleActuator = async () => {
    let temp;

    if (actuator === 0) {
      temp = 1;
    } else {
      temp = 0;
    }

    try {
      const response = await instance.post(`/devices/${sensor}`, null, {
        params: {
          deviceId,
          active: temp
        }
      });

      if (sensor === 'solid') {
        console.log('response', response.data);
        const { pump } = response.data.data;
        console.log('res', pump);
        setActuator(pump);
      } else {
        const { led } = response.data.data;
        setActuator(led);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Status onClick={handleActuator}>
      <StatusImage alt={`${onOffStatus[actuator]?.onOffMessage}`} src={onOffStatus[actuator]?.imgUrl} />
      <StatusMessage isActive={actuator}>{onOffStatus[actuator]?.onOffMessage}</StatusMessage>
    </Status>
  );
}

SensorOnOff.propTypes = {
  actuatorType: PropTypes.string.isRequired
};

const Status = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  border: 0.2rem solid #c6a692;
  border-radius: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 7rem;

  background: #ffffff;

  cursor: pointer;

  ${mediaQuery[3]} {
    height: 6rem;
  }

  ${mediaQuery[1]} {
    height: 5rem;
    /* margin: 0.5rem 0 0 0; */
  }
`;

const StatusImage = styled.img`
  width: 4.4rem;
  height: 4rem;
  margin-left: 2rem;

  ${mediaQuery[1]} {
    width: 3.3rem;
    height: 3rem;
    margin-left: 0.3rem;
  }
`;

const StatusMessage = styled.p`
  margin: 0.2rem 0 0 1.8rem;

  color: ${(props) => (props.isActive ? '#c6a692' : '#A9A8A8')};

  font-family: 'Jua', sans-serif;
  font-size: 2.5rem;
  line-height: 2.3rem;

  ${mediaQuery[1]} {
    margin: 0.2rem 0 0 0.5rem;

    font-size: 1.5rem;
    line-height: 1.3rem;
  }
`;
