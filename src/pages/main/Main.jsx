import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import instance from '../../utils/auth/interceptor';
import Sidebar from '../../components/common/Sidebar';
import DashBoard from '../../components/main/DashBoard';
import ModalOneButton from '../../components/common/ModalOneButton';

export default function Main() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const [devices, setDevices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const takeUser = async () => {
    try {
      const usersData = await instance.get('/users');
      setUsers(usersData.data);
    } catch (error) {
      setIsOpen(true);
    }
  };

  const takeDevice = async () => {
    try {
      const usersDevice = await instance.get('/devices');
      setDevices([...devices, ...usersDevice.data.data]);
    } catch (error) {
      throw Error('디바이스를 불러올 수 없습니다.');
    }
  };

  useEffect(() => {
    takeUser();
    takeDevice();
  }, []);

  const handleModalClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <>
      <Container>
        <Sidebar users={users} />
        <MainContent>
          {devices.map((item) => (
            <DashBoard device={item} />
          ))}
        </MainContent>
        <AddButton>추가하기</AddButton>
      </Container>
      {isOpen ? (
        <ModalOneButton title="인가된 사용자가 아닙니다." buttonDescription="확인" onClick={handleModalClick} />
      ) : (
        ''
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 90rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 0.5rem solid #c6a692;
`;

const MainContent = styled.div``;

const AddButton = styled.button`
  position: absolute;
  right: 3rem;
  bottom: 3rem;
  display: flex;
  align-items: center;
  height: 3.8rem;
  padding: 1.4rem 2rem;

  border: 0.1rem solid #c6a692;
  border-radius: 1.8rem;
  font-family: 'Jua';
  font-size: 1.4rem;
  color: #c6a692;

  background-color: white;

  &:hover {
    scale: 1.03;
    transition: 0.2s ease-out;
  }
`;
