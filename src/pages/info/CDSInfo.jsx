import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function CDSInfo() {
  const location = useLocation();
  const [cds, setCDS] = useState(70);
  const query = queryString.parse(location.search);
  const { deviceId } = query;
  const { deviceName } = query;

  useEffect(() => {
    const test = setInterval(() => {
      setCDS(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(test);
  }, [cds]);

  return <SensorInfoTemplate deviceId={deviceId} deviceName={deviceName} sensorName="조도" unit="%" sensorData={cds} />;
}
