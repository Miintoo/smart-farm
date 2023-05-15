import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalOneButton from './ModalOneButton';
import mediaQuery from '../../utils/breakPointUI';

export default function Sidebar({ users }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      setIsOpen(true);
    } catch (error) {
      throw Error('로그아웃이 성공하지 않았습니다.');
    }
  };

  const handleModalClick = () => {
    setIsOpen(false);
    navigate('/');
  };

  const handleSidebarButton = () => {};

  return (
    <>
      <SidebarImage src="images/Sidebar.png" alt="사이드바 버튼" onClick={handleSidebarButton} />
      <SidebarContainer>
        <ProfileContainer>
          <ProfileImage
            onClick={() => navigate(`/mypage?userName=${users.name}`)}
            src="/images/profile.jpg"
            alt="프로파일 이미지 입니다."
          />
          <ProfileName>{users.name} 농부</ProfileName>
        </ProfileContainer>
        <ButtonContainer>
          <ButtonList onClick={() => navigate('/main')}>메인으로 가기</ButtonList>
          <ButtonList onClick={handleLogout}>로그아웃</ButtonList>
        </ButtonContainer>
      </SidebarContainer>
      {isOpen ? <ModalOneButton title="로그아웃 됐습니다." buttonDescription="확인" onClick={handleModalClick} /> : ''}
    </>
  );
}

const SidebarImage = styled.img`
  display: none;
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;

  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    scale: 1.3;
  }
  ${mediaQuery[2]} {
    display: block;
  }

  ${mediaQuery[1]} {
    position: absolute;
    margin-left: 1rem;
  }
`;

const SidebarContainer = styled.nav`
  position: sticky;
  top: 0;

  flex: 0.4;
  height: 100%;

  background-color: #dfd2ca;

  ${mediaQuery[2]} {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  height: 82%;
  padding-top: 5rem;
`;

const ProfileImage = styled.img`
  display: block;
  width: 10.1rem;
  margin: auto;
  border-radius: 50%;

  background-color: white;

  opacity: 0.9;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    scale: 1.1;
    opacity: 0.6;
  }
`;

const ProfileName = styled.span`
  display: block;
  margin: 2rem auto;

  font-family: 'Jua';
  font-size: 2.6rem;
  text-align: center;
`;

const ButtonContainer = styled.ul``;

const ButtonList = styled.li`
  margin-bottom: 1.8rem;

  color: #9f8473;

  font-family: 'Jua';
  font-size: 1.8rem;
  text-align: center;
  text-decoration-style: double;
  text-decoration: underline;

  cursor: pointer;

  &:hover {
    transition: 0.2s ease-out;
    color: #646464;
  }
`;
