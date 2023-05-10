import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function DHTInfo() {
  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState(0);

  const deviceName = '상추';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.64.88.23/api/devices/dht', {
          params: {
            deviceId: 1
          }
        });

        console.log('dataArr', response.data.data);
        console.log('data', response.data.data[response.data.data.length - 1]);

        const currentData = response.data.data[response.data.data.length - 1];
        setTemp(currentData.temperature);
        setHumid(currentData.humidity);
      } catch (error) {
        Error('온습도 값을 받아오지 못했습니다.');
      }
    };

    fetchData();

    const intervalData = setInterval(async () => {
      try {
        const response = await axios.get('http://34.64.88.23/api/devices/dht', {
          params: {
            deviceId: 1
          }
        });

        console.log('dataArr1', response.data.data);
        console.log('data1', response.data.data[response.data.data.length - 1]);

        const currentData = response.data.data[response.data.data.length - 1];
        setTemp(currentData.temperature);
        setHumid(currentData.humidity);
      } catch (error) {
        Error('온습도 값을 받아오지 못했습니다.');
      }
    }, 5000);

    return () => {
      clearInterval(intervalData);
    };
  }, []);

  return <SensorInfoTemplate deviceName={deviceName} sensorName="온습도" unit="º" sensorData={[temp, humid]} />;
}
