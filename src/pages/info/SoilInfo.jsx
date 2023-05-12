import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';
import instance from '../../utils/auth/interceptor';

export default function SoilInfo() {
  const location = useLocation();
  const [solid, setSolid] = useState(0);

  const query = queryString.parse(location.search);
  const { deviceId } = query;
  const { deviceName } = query;

  useEffect(() => {
    // 최초 데이터 받아오기
    const fetchData = async () => {
      try {
        const response = await instance.get('/devices/solid', {
          params: {
            deviceId
          }
        });

        console.log('dataArr', response.data.data);
        console.log('data', response.data.data[response.data.data.length - 1]);

        const currentData = response.data.data[response.data.data.length - 1];
        setSolid(currentData.solid);
      } catch (error) {
        throw new Error('토양수분 값을 받아오지 못했습니다.');
      }
    };

    fetchData();

    // 일정 주기로 데이터 받아오기
    const intervalData = setInterval(async () => {
      try {
        const response = await instance.get('/devices/solid', {
          params: {
            deviceId
          }
        });

        console.log('dataArr1', response.data.data);
        console.log('data1', response.data.data[response.data.data.length - 1]);

        const currentData = response.data.data[response.data.data.length - 1];
        setSolid(currentData.solid);
      } catch (error) {
        throw new Error('토양수분 값을 받아오지 못했습니다.');
      }
    }, 5000);

    // 인터벌 삭제
    return () => {
      clearInterval(intervalData);
    };
  }, []);

  return (
    <>
      <SensorInfoTemplate
        deviceId={deviceId}
        deviceName={deviceName}
        sensorName="토양수분"
        unit="%"
        sensorData={solid}
      />
      ;
    </>
  );
}
