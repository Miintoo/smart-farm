import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';
import instance from '../../utils/auth/interceptor';

export default function CDSInfo() {
  const location = useLocation();
  const [cds, setCDS] = useState(0);
  const [actuator, setActuator] = useState(0); // 0: 꺼짐, 1: 켜짐

  const query = queryString.parse(location.search);
  const { deviceId } = query;
  const { deviceName } = query;

  const infoContent = {
    good: ['200lux 이상'],
    normal: ['100~199lux']
  };

  const status = [];
  if (cds >= 500) {
    status[0] = 'good';
  } else if (cds >= 201 && cds <= 499) {
    status[0] = 'normal';
  } else {
    status[0] = 'bad';
  }

  useEffect(() => {
    // 최초 데이터 받아오기
    const fetchData = async () => {
      try {
        const response = await instance.get('/devices/lux', {
          params: {
            deviceId
          }
        });
        const { deviceStatus, searchData } = response.data.data;

        setCDS(searchData[0].lux);
        setActuator(deviceStatus.led);
      } catch (error) {
        Error('조도 값을 받아오지 못했습니다.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 일정 주기로 데이터 받아오기
    const intervalData = setInterval(async () => {
      try {
        const response = await instance.get('/devices/lux', {
          params: {
            deviceId
          }
        });

        const { deviceStatus, searchData } = response.data.data;

        setCDS(searchData[0].lux);
        setActuator(deviceStatus.led);
      } catch (error) {
        Error('조도 값을 받아오지 못했습니다.');
      }
    }, 5000);

    // 인터벌 삭제
    return () => {
      clearInterval(intervalData);
    };
  }, []);

  return (
    <SensorInfoTemplate
      deviceId={deviceId}
      deviceName={deviceName}
      sensorName="조도"
      unit="lux"
      sensorData={cds}
      infoContent={infoContent}
      actuatorStatus={actuator}
      actuatorType="led"
      status={status}
      setActuator={setActuator}
    />
  );
}
