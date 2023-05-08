import React, { useState, useEffect } from 'react';
// import styled from '@emotion/styled';
// import SensorMenu from '../../components/info/SensorMenu';
// import SensorStatus from '../../components/info/SensorStatus';
// import SensorInfo from '../../components/info/SensorInfo';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function DHTInfo() {
  const [temp, setTemp] = useState(26);
  const [humid, setHumid] = useState(70);

  const deviceName = '상추';

  useEffect(() => {
    const test = setInterval(() => {
      setTemp(Math.floor(Math.random() * 100));
      setHumid(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(test);
  }, [temp, humid]);

  return (
    <SensorInfoTemplate deviceName={deviceName} sensorName={['온도', '습도']} unit="º" sensorData={[temp, humid]} />
  );
}
