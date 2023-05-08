import React from 'react';
import styled from '@emotion/styled';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);
export default function sensorInfo({ sensorData, sensorName, unit }) {
  let gaugeColor = '#ced4da';
  // console.log(Doughnut);
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
        label: `${sensorName} `,
        data: [sensorData, 100 - sensorData],
        backgroundColor: [gaugeColor, '#ced4da'],
        borderWidth: 1
      }
    ]
  };

  // chart 가운데 text 구현
  const deviceValue = {
    id: 'deviceValue',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const chartData = chart.data;

      ctx.save();
      ctx.font = 'bold 2rem sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.fillText(
        `${chartData.datasets[0].label}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y / 1.3
      );
      ctx.fillText(
        `${chartData.datasets[0].data[0]}${unit}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y / 1.08
      );
    }
  };

  const options = {
    type: 'doughnut',
    data,
    maintainAspectRatio: false,
    rotation: -90, // -90도 부터 그래프 시작
    circumference: 180, // 180도만큼 보여줌
    // animation: false, // 기본 애니메이션 동작 x
    cutout: '55%', // 차트의 굵기 조정(값이 클수록 좁고, 작을수록 넓음)
    // hover: data === data.datasets[0].data[0],
    // responsive: true,
    plugins: {
      tooltip: {
        enabled: false // tooltip 사용 x
      }
    }
  };

  return (
    <Wrapper>
      <Doughnut data={data} options={options} plugins={[deviceValue]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40%;
  height: 40%;
`;
