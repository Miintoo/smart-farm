import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalOneButton from './ModalOneButton';

export default function Sidebar({ users }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await axios.get('/api/logout');
      setIsOpen(true);
    } catch (error) {
      throw Error('로그아웃이 성공하지 않았습니다.');
    }
  };

  const handleModalClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <>
      <SidebarContainer>
        <ProfileContainer>
          <ProfileImage onClick={() => navigate('/mypage')} src="images/profile.jpg" alt="프로파일 이미지 입니다." />
          <ProfileName>{users.name} 농부</ProfileName>
        </ProfileContainer>
        <ButtonContainer>
          <ButtonList onClick={() => navigate('/main')}>메인 페이지</ButtonList>
          <ButtonList onClick={handleLogout}>로그아웃</ButtonList>
        </ButtonContainer>
      </SidebarContainer>
      {isOpen ? <ModalOneButton title="로그아웃 됐습니다." buttonDescription="확인" onClick={handleModalClick} /> : ''}
    </>
  );
}

const SidebarContainer = styled.div`
  width: 27%;
  height: 75vh;
  background-color: #dfd2ca;
`;

const ProfileContainer = styled.div`
  padding-top: 5rem;
  height: 82%;
`;

const ProfileImage = styled.img`
  display: block;
  width: 10.1rem;
  margin: auto;

  border-radius: 50%;
  opacity: 0.9;
  background-color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
    transition: 0.2s ease-out;
  }
`;

const ProfileName = styled.span`
  display: block;
  margin: 2rem auto;
  text-align: center;

  font-family: 'Jua';
  font-size: 2.6rem;
`;

const ButtonContainer = styled.ul``;

const ButtonList = styled.li`
  margin-bottom: 1.8rem;
  text-align: center;

  font-family: 'Jua';
  font-size: 1.8rem;

  text-decoration: underline;
  text-decoration-style: double;
  color: #9f8473;

  cursor: pointer;

  &:hover {
    color: #646464;
    transition: 0.2s ease-out;
  }
`;
