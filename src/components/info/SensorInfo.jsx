import React from 'react';
import styled from '@emotion/styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function sensorInfo({ sensorData, sensorName }) {
  const data = {
    labels: '',
    datasets: [
      {
        label: `현재 ${sensorName} `,
        data: [sensorData, 100 - sensorData],
        backgroundColor: ['#FF6384', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['#FF6384'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    type: 'doughnut',
    data,
    rotation: -90, // -90도 부터 그래프 시작
    circumference: 180, // 180도만큼 보여줌
    animation: false, // 기본 애니메이션 x
    cutout: 80, // 차트의 굵기 조정(값이 클수록 좁고, 작을수록 넓음)
    plugins: {
      tooltip: {
        enabled: false // tooltip 사용 x
      }
    }
  };

  return (
    <Wrapper>
      <Doughnut data={data} options={options} />;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* height: 40%; */
`;
