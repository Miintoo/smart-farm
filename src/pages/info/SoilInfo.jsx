import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';
import instance from '../../utils/auth/interceptor';

export default function SoilInfo() {
  const location = useLocation();
  const [solid, setSolid] = useState(0);
  const [actuator, setActuator] = useState(0); // 0: 꺼짐, 1: 켜짐
  const [loading, setLoading] = useState(true);

  console.log('solid', actuator);
  const query = queryString.parse(location.search);
  const { deviceId } = query;
  const { deviceName } = query;

  const infoContent = {
    good: ['2000% 이하'],
    normal: ['2001% ~ 3000%']
  };

  const status = [];
  if (solid <= 2000) {
    status[0] = 'good';
  } else if (solid >= 2001 && solid <= 3000) {
    status[0] = 'normal';
  } else {
    status[0] = 'bad';
  }

  useEffect(() => {
    // 최초 데이터 받아오기
    const fetchData = async () => {
      try {
        const response = await instance.get('/devices/solid', {
          params: {
            deviceId
          }
        });
        const { deviceStatus, searchData } = response.data.data;
        setSolid(searchData[0].solid);
        setActuator(deviceStatus.pump);
        setLoading(false);
      } catch (error) {
        Error('토양수분 값을 받아오지 못했습니다.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 일정 주기로 데이터 받아오기
    const intervalData = setInterval(async () => {
      try {
        const response = await instance.get('/devices/solid', {
          params: {
            deviceId
          }
        });

        const { deviceStatus, searchData } = response.data.data;
        setSolid(searchData[0].solid);
        setActuator(deviceStatus.pump);
        setLoading(false);
      } catch (error) {
        Error('토양수분 값을 받아오지 못했습니다.');
      }
    }, 5000);

    // 인터벌 삭제
    return () => {
      clearInterval(intervalData);
    };
  }, []);

  return (
    <div>
      {loading ? (
        'loading...'
      ) : (
        <SensorInfoTemplate
          deviceId={deviceId}
          deviceName={deviceName}
          sensorName="토양수분"
          unit="%"
          sensorData={solid}
          infoContent={infoContent}
          actuatorStatus={actuator}
          actuatorType="펌프"
          status={status}
        />
      )}
    </div>
  );
}
