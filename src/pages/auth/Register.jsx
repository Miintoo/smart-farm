import React from 'react';
import styled from '@emotion/styled';

export default function Register() {
  return (
    <RegisterBox>
      <RegisterTitle>환영합니다!</RegisterTitle>
      <RegisterForm>
        <InputLabel htmlFor="email">
          이메일
          <InputBox id="email" type="text" />
          {/* <select name="" id="" /> */}
        </InputLabel>
        <InputLabel htmlFor="password">
          비밀번호
          <InputBox id="password" type="text" />
        </InputLabel>
        <InputLabel htmlFor="password-confirm">
          비밀번호 확인
          <InputBox id="password-confirm" type="text" />
        </InputLabel>
        <InputLabel htmlFor="name">
          이름
          <InputBox id="name" type="text" />
        </InputLabel>
        <InputLabel htmlFor="phone-number">
          전화번호
          <InputBox id="phone-number" type="text" />
        </InputLabel>
        <InputButton type="submit">가입하기</InputButton>
      </RegisterForm>
    </RegisterBox>
  );
}

const RegisterBox = styled.div`
  width: 60vw;
  height: 74vh;
  margin: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 0.6rem solid #c6a692;
`;

const RegisterTitle = styled.h2`
  margin-top: 2.4rem;

  font-family: 'Jua';
  font-size: 4rem;
  font-weight: 400;
  text-align: center;

  color: #c6a692;
`;

const RegisterForm = styled.form`
  width: 60%;
  margin: 3rem auto;

  font-family: 'Jua';
`;

const InputLabel = styled.label`
  font-size: 1.6rem;
  color: #6c5d53;

  nth-child(1) {
    color: black;
  }
`;

// const InputEmailBox = styled.div``;
const InputBox = styled.input`
  width: 100%;
  height: 2rem;

  margin: 0.4rem 0 1.4rem 0;

  border: 0.15rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
`;

const InputButton = styled.button`
  width: 100%;

  font-family: 'Jua';
`;
