import React from 'react';
import styled from '@emotion/styled';

export default function NotFoundScene() {
  return (
    <Container>
      <Title>원하시는 페이지를 찾을 수 없습니다.</Title>
      <Description>
        찾으려는 페이지의 주소가 잘못 입력되었거나, 주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다. 입력하신 페이지의
        주소가 정확한지 다시 한번 확인해 주세요.
      </Description>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 28vw;
  margin: auto;
`;

const Title = styled.h1`
  width: 80%;
  margin: 0 auto 3rem;

  font-family: 'Jua';
  font-size: 3rem;
  text-align: center;
`;

const Description = styled.p`
  width: 70%;
  margin: auto;
  font-family: 'Jua';
  font-size: 1.8rem;
  text-align: center;

  opacity: 0.5;
`;
