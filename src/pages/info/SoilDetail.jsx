import React, { useState, useEffect } from 'react';
import SensorDetailTemplate from '../../components/info/SensorDetailTemplate';

export default function SoilDetail() {
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

  return <SensorDetailTemplate deviceName={deviceName} />;
}
