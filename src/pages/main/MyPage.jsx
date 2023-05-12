import React from 'react';
import styled from '@emotion/styled';

export default function MyPage() {
  return (
    <Container>
      <h2>회원 정보</h2>
      <div>
        <ProfileImage src="images/profile.jpg" alt="프로파일 이미지 입니다." />
        <span>김민혁 농부</span>
        <ul>
          <li>
            <button type="button">비밀번호 변경</button>
          </li>
          <li>
            <button type="button">회원정보 수정</button>
          </li>
          <li>
            <button type="button">회원탈퇴</button>
          </li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div``;
const ProfileImage = styled.img`
  display: block;
  width: 10.1rem;
  margin: auto;
  border-radius: 50%;

  background-color: white;

  opacity: 0.9;
`;
