import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export default function SensorInfoModal({ title, buttonDescription, onClick, infoContent }) {
  const [isDht, setIsDht] = useState(false);
  console.log('11', infoContent);

  useEffect(() => {
    if (title === '온습도') {
      setIsDht(true);
    }
  }, []);

  return (
    <>
      <Container>
        <ContentContainer>
          <Title>{`${title} 정보`}</Title>
          <StatusStandard>
            [ 상태 기준 ]
            {isDht ? (
              <Status>
                <img alt="좋음상태" src="images/smile.png" />
                <p>좋음 : </p>
                <p>{infoContent.good[0]}</p>
                <p>/</p>
                <p>{infoContent.good[1]}</p>
              </Status>
            ) : (
              <Status>{infoContent.good[0]}</Status>
            )}
            {isDht ? (
              <Status>
                <img alt="보통상태" src="images/normal.png" />
                <p>보통 : </p>
                <p>{infoContent.normal[0]}</p>
                <p>/</p>
                <p>{infoContent.normal[1]}</p>
              </Status>
            ) : (
              <Status>{infoContent.normal[0]}</Status>
            )}
            <Status>
              <img alt="나쁨상태" src="images/Bad.png" />
              <p>나쁨 : </p>
              <p>위 기준에 해당하지 않는 경우</p>
            </Status>
          </StatusStandard>
          <ButtonTitle onClick={onClick}>{buttonDescription}</ButtonTitle>
        </ContentContainer>
      </Container>
      <ModalBackdrop />
    </>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30vw;
  height: 40vh;
  border: 1rem solid #c6a692;
  border-radius: 1rem;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  background-color: white;
`;

const ContentContainer = styled.div`
  position: absolute;

  width: 100%;
`;

const Title = styled.h2`
  width: 80%;
  margin: 3.5rem auto 0;
  padding-bottom: 3rem;

  color: #c6a692;

  font-size: 2.6rem;
  font-family: 'Jua';
  text-align: center;
`;

const StatusStandard = styled.div`
  margin: 1.3rem 0 0 3rem;

  color: #c6a692;

  font-size: 1.7rem;
  font-family: 'Jua';

  > :first-child {
    margin-top: 2.5rem;
  }
`;

const Status = styled.div`
  display: flex;
  margin: 2rem 0 0 0;

  font-size: 1.5rem;

  > img {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.6rem;
  }
  > p {
    margin-left: 0.8rem;
  }
  > p:first-of-type {
    margin-left: 1rem;
  }
`;

const ButtonTitle = styled.button`
  display: block;
  width: 10rem;
  margin: 5.5rem auto 0;
  padding-top: 0.5rem;
  border: 0.3rem solid #c6a692;
  border-radius: 3rem;

  color: #c6a692;
  background-color: white;

  font-size: 2rem;
  font-family: 'Jua';
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
