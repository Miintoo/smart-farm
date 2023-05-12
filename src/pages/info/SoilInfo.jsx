import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function SoilInfo() {
  const location = useLocation();
  const [soil, setSoil] = useState(70);
  const query = queryString.parse(location.search);
  const { deviceId } = query;
  const { deviceName } = query;

  useEffect(() => {
    const test = setInterval(() => {
      setSoil(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(test);
  }, [soil]);

  return (
    <>
      <SensorInfoTemplate
        deviceId={deviceId}
        deviceName={deviceName}
        sensorName="토양수분"
        unit="%"
        sensorData={soil}
      />
      ;
    </>
  );
}
