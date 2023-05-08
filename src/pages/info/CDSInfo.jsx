import React, { useState, useEffect } from 'react';
// import styled from '@emotion/styled';
// import SensorMenu from '../../components/info/SensorMenu';
// import SensorStatus from '../../components/info/SensorStatus';
// import SensorOnOff from '../../components/info/SensorOnOff';
// import SensorInfo from '../../components/info/SensorInfo';
import SensorInfoTemplate from '../../components/info/SensorInfoTemplate';

export default function CDSInfo() {
  const [cds, setCDS] = useState(70);
  const deviceName = '상추';

  useEffect(() => {
    const test = setInterval(() => {
      setCDS(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(test);
  }, [cds]);

  return <SensorInfoTemplate deviceName={deviceName} sensorName="조도" unit="%" sensorData={cds} />;
}
