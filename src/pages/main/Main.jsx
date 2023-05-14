import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import instance from '../../utils/auth/interceptor';
import Sidebar from '../../components/common/Sidebar';
import DeviceItem from '../../components/main/DeviceItem';
import ModalOneButton from '../../components/common/ModalOneButton';
import mediaQuery from '../../utils/breakPointUI';
import ModalAddDevice from '../../components/main/ModalAddDevice';

export default function Main() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [devices, setDevices] = useState([]);
  const [isOpen, setIsOpen] = useState({
    errorAlert: false,
    addAlert: false
  });

  const takeUser = async () => {
    try {
      const response = await instance.get('/users');
      setUsers(response.data);
    } catch (error) {
      setIsOpen((prev) => {
        return { ...prev, errorAlert: true };
      });
    }
  };

  const takeDevice = async () => {
    try {
      const response = await instance.get('/devices');
      setDevices([...devices, ...response.data.data]);
    } catch (error) {
      Error('디바이스를 불러올 수 없습니다.');
    }
  };

  useEffect(() => {
    takeUser();
    takeDevice();
  }, []);

  const handleModalClick = () => {
    setIsOpen((prev) => {
      return { ...prev, errorAlert: false };
    });
    navigate('/');
  };

  const handleAddButton = () => {
    setIsOpen((prev) => {
      return { ...prev, addAlert: true };
    });
  };

  const hanldeAddModalButton = () => {
    setIsOpen((prev) => {
      return { ...prev, addAlert: false };
    });
  };

  const updateDevice = (data) => {
    setDevices([...devices, ...data]);
  };

  return (
    <>
      <Container>
        <Sidebar users={users} />
        <MainContent>
          {devices.map((item) => (
            <DeviceItem device={item} key={item.deviceId} />
          ))}
        </MainContent>
        <AddButton onClick={handleAddButton}>추가하기</AddButton>
      </Container>
      {isOpen.errorAlert ? (
        <ModalOneButton title="세션이 만료되었습니다." buttonDescription="확인" onClick={handleModalClick} />
      ) : (
        ''
      )}
      {isOpen.addAlert ? <ModalAddDevice onClick={hanldeAddModalButton} updateDevice={updateDevice} /> : ''}
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  width: 70vw;
  height: 75vh;
  border: 0.5rem solid #c6a692;

  transform: translate(-50%, -50%);

  ${mediaQuery[3]} {
    width: 75vw;
  }

  ${mediaQuery[2]} {
    width: 80vw;
  }

  ${mediaQuery[1]} {
    overflow: scroll;
    width: 99vw;
    border: none;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const AddButton = styled.button`
  position: sticky;
  top: 90%;
  right: 3rem;

  display: flex;
  align-items: center;
  height: 3.8rem;
  padding: 1.4rem 2rem;
  border: 0.1rem solid #c6a692;
  border-radius: 1.8rem;

  background-color: white;
  color: #c6a692;

  font-family: 'Jua';
  font-size: 1.4rem;

  &:hover {
    transition: 0.2s ease-out;
    scale: 1.08;
  }

  ${mediaQuery[1]} {
    position: absolute;
    right: 1rem;
    bottom: 0;
  }
`;
