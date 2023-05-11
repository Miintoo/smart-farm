import React, { useState, useEffect } from 'react';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function SoilInfo() {
  const [soil, setSoil] = useState(70);

  useEffect(() => {
    const test = setInterval(() => {
      setSoil(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(test);
  }, [soil]);

  return (
    <>
      <SensorInfoTemplate sensorName="토양수분" unit="%" sensorData={soil} />;
    </>
  );
}
