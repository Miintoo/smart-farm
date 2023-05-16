import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import instance from '../../utils/auth/interceptor';
import Sidebar from '../common/Sidebar';
import ModalOneButton from '../common/ModalOneButton';
import SensorMenu from './SensorMenu';
import SensorStatus from './SensorStatus';
import SensorOnOff from './SensorOnOff';
import SensorInfo from './SensorInfo';
import mediaQuery from '../../utils/breakPointUI';

export default function SensorInfoTemplate({
  deviceName,
  deviceId,
  sensorName,
  sensorData,
  unit,
  infoContent,
  status
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDht, setIsDht] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const dhtProps = isDht ? { dht: true } : {};

  const takeUser = async () => {
    try {
      const usersData = await instance.get('/users');
      setUsers(usersData.data);
    } catch (error) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (sensorName === '온습도') {
      setIsDht(true);
    }
    takeUser();
  }, []);

  const handleDetailClick = () => {
    navigate(`${location.pathname}/detail`);
  };

  const handleModalClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  const handleInfoModalClick = () => {
    setInfoOpen(!infoOpen);
  };

  return (
    <>
      <Container>
        <Sidebar users={users} />
        <ContentWrapper>
          <SensorMenu menuType="info" deviceId={deviceId} deviceName={deviceName} />
          <DeviceInfoWrapper>
            <DeviceName>디바이스: {deviceName}</DeviceName>
            <SensorStatusWrapper {...dhtProps}>
              <SensorStatus status={status[0]} />
              {isDht ? <SensorStatus status={status[1]} /> : <SensorOnOff actuatorType="펌프" />}
            </SensorStatusWrapper>

            <SensorInfoWrapper {...dhtProps}>
              <InfoModal>
                {sensorName} 정보
                <button type="button" onClick={handleInfoModalClick}>
                  <img alt={`${sensorName} 정보`} src="/images/question.png" />
                </button>
                <button type="button" onClick={handleDetailClick}>
                  <img alt={`${sensorName} 상세`} src="/images/rightArrow.png" />
                </button>
              </InfoModal>
              <GraphWrapper>
                {isDht ? (
                  <>
                    <SensorInfo sensorData={sensorData[0]} sensorName="온도" unit="º" isDht={isDht} />
                    <SensorInfo sensorData={sensorData[1]} sensorName="습도" unit="%" isDht={isDht} />
                  </>
                ) : (
                  <SensorInfo sensorData={sensorData} sensorName={sensorName} unit={unit} isDht={isDht} />
                )}
              </GraphWrapper>
            </SensorInfoWrapper>
          </DeviceInfoWrapper>
        </ContentWrapper>
      </Container>
      {isOpen ? (
        <ModalOneButton title="인가된 사용자가 아닙니다." buttonDescription="확인" onClick={handleModalClick} />
      ) : (
        ''
      )}
      {infoOpen ? (
        <ModalOneButton
          title={sensorName}
          buttonDescription="확인"
          onClick={handleInfoModalClick}
          infoContent={infoContent}
        />
      ) : (
        ''
      )}
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 60vw;
  height: 75vh;
  border: 0.5rem solid #c6a692;

  ${mediaQuery[3]} {
    width: 75vw;
  }

  ${mediaQuery[1]} {
    width: 90vw;
  }

  ${mediaQuery[0]} {
    width: 100%;
    border: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;

  flex: 1;
  width: 100%;
`;

const DeviceInfoWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 60rem;
  max-height: calc(63vh - 3rem);
  border-radius: 1rem;
  margin: 0 auto;

  background: #f0e7e2;

  ${mediaQuery[3]} {
    height: 53rem;
  }
  ${mediaQuery[1]} {
    height: 60rem;
  }
`;

const DeviceName = styled.p`
  position: absolute;

  margin: 2rem 0 0 2.6rem;

  color: #c6a692;

  font-family: 'Jua', sans-serif;
  font-size: 2rem;
  line-height: 1.8rem;

  ${mediaQuery[1]} {
    font-size: 1.3rem;
    line-height: 1.8rem;

    margin: 1.5rem 0 0 2.6rem;
  }
`;

const SensorStatusWrapper = styled.div`
  position: absolute;

  display: flex;
  width: calc(100% - 4.8rem);
  margin: 5.6rem 2.4rem;
  gap: 1.6rem;

  ${mediaQuery[1]} {
    flex-direction: column;
    margin: 4.5rem 2.4rem;
    gap: 0.5rem;
  }
`;

const SensorInfoWrapper = styled.div`
  position: absolute;

  width: calc(100% - 4.8rem);
  height: 53rem;
  max-height: calc(100% - 16rem);
  border: 0.2rem solid #c6a692;
  border-radius: 1rem;
  margin: 14rem 0 0 2.4rem;

  background: #ffffff;

  ${mediaQuery[3]} {
    height: 38rem;
    margin: 12.5rem 0 0 2.4rem;
  }

  ${mediaQuery[1]} {
    /* margin-top: ${(props) => (props.dht ? '10rem' : '15.6rem')}; */
    margin-top: ${(props) => (props.dht ? '15.6rem' : '15.6rem')};

    height: 50rem;
    /* max-height: ${(props) => (props.dht ? 'calc(63vh - 15rem)' : 'calc(63vh - 20.5rem)')} */
    max-height: ${(props) => (props.dht ? 'calc(63vh - 20.5rem)' : 'calc(63vh - 20.5rem)')};
  }
`;

const InfoModal = styled.div`
  position: absolute;
  right: 10rem;

  margin-top: 1.5rem;

  color: #c6a692;

  font-family: 'Jua', sans-serif;
  font-size: 1.5rem;
  line-height: 2.5rem;

  > button:first-of-type {
    position: absolute;

    margin: 0.1rem 0 0 1rem;
    border: none;

    background: #fff;

    cursor: pointer;

    > img {
      width: 2rem;
      height: 2rem;
    }
  }

  > button:last-child {
    position: absolute;

    border: none;
    margin: 0.2rem 0 0 5rem;

    background: #fff;

    > img {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  ${mediaQuery[3]} {
    right: 9rem;

    > button:first-of-type {
      margin-left: 0.8rem;
      > img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    > button:last-child {
      margin: 0.2rem 0 0 5rem;
      > img {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }

  ${mediaQuery[1]} {
    right: 7rem;

    font-size: 1.3rem;
    line-height: 1.3rem;

    > button:first-of-type {
      margin: -0.3rem 0 0 0.2rem;
      > img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    > button:last-child {
      margin: -0.3rem 0 0 3.5rem;
      > img {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }
`;

const GraphWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(100% - 4.8rem);
  height: 80%;
  margin: 3.5rem 0 0 2.4rem;

  ${mediaQuery[1]} {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
