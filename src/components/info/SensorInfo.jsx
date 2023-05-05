import React from 'react';
import styled from '@emotion/styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function sensorInfo({ sensorData, sensorName, unit }) {
  let gaugeColor = '#ced4da';

  if (sensorData < 30) {
    gaugeColor = '#FF0000';
  } else if (sensorData < 60) {
    gaugeColor = '#F97600';
  } else if (sensorData < 90) {
    gaugeColor = '#F6C600';
  } else {
    gaugeColor = '#60B044';
  }

  const data = {
    labels: '',
    datasets: [
      {
        label: `현재 ${sensorName} `,
        data: [sensorData, 100 - sensorData],
        backgroundColor: [gaugeColor, '#ced4da'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    type: 'doughnut',
    data,
    maintainAspectRatio: false,
    rotation: -90, // -90도 부터 그래프 시작
    circumference: 180, // 180도만큼 보여줌
    // animation: false, // 기본 애니메이션 동작 x
    cutout: 60, // 차트의 굵기 조정(값이 클수록 좁고, 작을수록 넓음)
    hover: data.datasets.data,
    plugins: {
      tooltip: {
        enabled: false // tooltip 사용 x
      }
    }
  };

  return (
    <Wrapper>
      <Doughnut data={data} options={options} />
      <TextContainer>
        <p>{sensorName}</p>
        <p>
          {sensorData}
          {unit}
        </p>
      </TextContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40%;
  height: 40%;
`;

const TextContainer = styled.div`
  position: absolute;
  margin: auto;
  width: 40%;
  top: 55%;

  > p:first-of-type {
    padding-bottom: 1rem;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;

    color: black;
  }

  > p:last-child {
    font-size: 03rem;
    line-height: 2rem;
    margin-left: 0.7rem;
    text-align: center;

    color: black;
  }
`;
