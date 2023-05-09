import React from 'react';
import styled from '@emotion/styled';

export default function AuthModalOneButton({ title, buttonDescription, onClick }) {
  return (
    <>
      <Container>
        <ContentContainer>
          <Title>{title}</Title>
          <ButtonTitle onClick={onClick}>{buttonDescription}</ButtonTitle>
        </ContentContainer>
      </Container>
      <ModalBackdrop />
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30vw;
  height: 40vh;

  padding: 4rem 2rem;

  z-index: 3;

  border: 1rem solid #c6a692;
  border-radius: 1rem;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  background-color: white;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
`;

const Title = styled.h2`
  width: 80%;
  margin: auto;
  padding-bottom: 3rem;
  text-align: center;
  font-size: 2.6rem;
  font-family: 'Jua';
  color: #c6a692;
`;

const ButtonTitle = styled.button`
  display: block;
  width: 10rem;
  margin: 3.4rem auto 0;
  padding-top: 0.4rem;

  border: 0.5rem solid #c6a692;
  border-radius: 3rem;

  font-size: 2rem;
  font-family: 'Jua';
  color: #c6a692;

  background-color: white;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);

  pointer-events: none;
`;
