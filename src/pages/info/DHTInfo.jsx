import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import instance from '../../utils/auth/interceptor';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function DHTInfo() {
  const location = useLocation();
  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState(0);
  // const [device, setDevice] = useState('');

  const infoContent = {
    sensor: ['온도', '습도'],
    good: ['15~20도', '75~85%'],
    normal: ['10~14도, 21~25도', '65~74%, 86~95%']
  };

  const device = location.state?.device;
  console.log(device);
  useEffect(() => {
    // 최초 데이터 받아오기
    const fetchData = async () => {
      try {
        const response = await instance.get('/devices/dht', {
          params: {
            deviceId: device.deviceId
          }
        });

        console.log('dataArr', response.data.data);
        console.log('data', response.data.data[response.data.data.length - 1]);

        const currentData = response.data.data[response.data.data.length - 1];
        setTemp(currentData.temperature);
        setHumid(currentData.humidity);
        // setDevice(location.state.device);
      } catch (error) {
        throw new Error('온습도 값을 받아오지 못했습니다.');
      }
    };

    fetchData();

    // 일정 주기로 데이터 받아오기
    // const intervalData = setInterval(async () => {
    //   try {
    //     const response = await instance.get('/devices/dht', {
    //       params: {
    //         deviceId: 1
    //       }
    //     });

    //     console.log('dataArr1', response.data.data);
    //     console.log('data1', response.data.data[response.data.data.length - 1]);

    //     const currentData = response.data.data[response.data.data.length - 1];
    //     setTemp(currentData.temperature);
    //     setHumid(currentData.humidity);
    //   } catch (error) {
    //     Error('온습도 값을 받아오지 못했습니다.');
    //   }
    // }, 5000);

    // // 인터벌 삭제
    // return () => {
    //   clearInterval(intervalData);
    // };
  }, []);

  return <SensorInfoTemplate sensorName="온습도" unit="º" sensorData={[temp, humid]} infoContent={infoContent} />;
}
