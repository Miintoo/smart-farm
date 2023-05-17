import React from 'react';
import styled from '@emotion/styled';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import mediaQuery from '../../utils/breakPointUI';

ChartJS.register(ArcElement);
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
        label: `${sensorName}`,
        data: [sensorData, 100 - sensorData],
        backgroundColor: [gaugeColor, '#ced4da'],
        borderWidth: 1
      }
    ]
  };

  const DhtProps = sensorName === '온도' || sensorName === '습도' ? { isDht: true } : {};

  // chart 가운데 text 구현
  const deviceValue = {
    id: 'deviceValue',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;
      const chartData = chart.data;

      ctx.save();

      if (window.innerWidth <= 360) {
        ctx.font = 'bold 1rem sans-serif';
      } else if (window.innerWidth <= 500) {
        ctx.font = 'bold 1.3rem sans-serif';
      } else {
        ctx.font = 'bold 1.5rem sans-serif';
      }
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
    maintainAspectRatio: false, // 크기가 조정될 때 원본 캔버스의 방향 비율 유지 x
    rotation: -90, // -90도 부터 그래프 시작
    circumference: 180, // 180도만큼 보여줌
    cutout: '55%', // 차트의 굵기 조정(값이 클수록 좁고, 작을수록 넓음)
    responsive: true, // 차트 반응형
    animation: { animateRotate: false }, // 차트가 시계방향으로 그리면서 나오는 애니메이션 제거
    plugins: {
      tooltip: {
        enabled: false // tooltip 사용 x
      }
    }
  };

  return (
    <Wrapper {...DhtProps}>
      <Doughnut data={data} options={options} plugins={[deviceValue]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${(props) => (props.isDht ? '20rem' : '25rem')};
  height: ${(props) => (props.isDht ? '10rem' : '20rem')};

  ${mediaQuery[3]} {
    width: ${(props) => (props.isDht ? '18rem' : '25rem')};
    height: ${(props) => (props.isDht ? '15rem' : '18rem')};
  }

  ${mediaQuery[1]} {
    width: ${(props) => (props.isDht ? '15rem' : '17rem')};
    height: ${(props) => (props.isDht ? '12rem' : '14rem')};
  }

  ${mediaQuery[0]} {
    width: ${(props) => (props.isDht ? '12rem' : '15rem')};
    height: ${(props) => (props.isDht ? '10rem' : '10rem')};
  }
`;
