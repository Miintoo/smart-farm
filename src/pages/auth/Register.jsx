import React from 'react';
import styled from '@emotion/styled';
import mediaQuery from '../../utils/breakPointUI';

export default function Register() {
  return (
    <RegisterBox>
      <RegisterTitle>환영합니다!</RegisterTitle>
      <RegisterForm>
        <InputLabel htmlFor="email">이메일</InputLabel>
        <EmailBox>
          <InputEmailBox id="email" type="text" />
          <EmailSelectBox name="address" id="email">
            <option value="" selected>
              선택
            </option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">google.com</option>
            <option value="daum.com">daum.com</option>
          </EmailSelectBox>
        </EmailBox>
        <InputLabel htmlFor="password">비밀번호</InputLabel>
        <InputBox id="password" type="text" />
        <InputLabel htmlFor="password-confirm">비밀번호 확인</InputLabel>
        <InputBox id="password-confirm" type="text" />
        <NamePhoneBox>
          <NameBox>
            <InputNameLabel htmlFor="name">이름</InputNameLabel>
            <InputNameBox id="name" type="text" />
          </NameBox>
          <PhoneBox>
            <InputPhoneLabel htmlFor="phone-number">전화번호</InputPhoneLabel>
            <InputBox id="phone-number" type="text" />
          </PhoneBox>
        </NamePhoneBox>
        <InputButton type="submit">가입하기</InputButton>
      </RegisterForm>
    </RegisterBox>
  );
}

const RegisterBox = styled.div`
  width: 62vw;
  height: 60vh;
  margin: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 0.6rem solid #c6a692;

  ${mediaQuery[1]} {
    width: 78vw;
  }

  ${mediaQuery[0]} {
    border: none;
  }
`;

const RegisterTitle = styled.h2`
  margin-top: 5rem;

  font-family: 'Jua';
  font-size: 4.4rem;
  font-weight: 400;
  text-align: center;

  color: #c6a692;
`;

const RegisterForm = styled.form`
  width: 60%;
  margin: 6rem auto;

  font-family: 'Jua';

  ${mediaQuery[1]} {
    width: 80%;
  }

  ${mediaQuery[0]} {
    width: 100%;
  }
`;

const EmailBox = styled.div`
  display: flex;
  align-items: center;
`;

const NamePhoneBox = styled.div`
  display: flex;
  align-items: center;
`;

const NameBox = styled.div`
  width: 50%;
`;

const PhoneBox = styled.div`
  width: 50%;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 2rem;
  color: #6c5d53;

  ${mediaQuery[1]} {
    font-size: 1.4rem;
  }
`;

const InputNameLabel = styled(InputLabel)`
  width: 50%;
`;
const InputPhoneLabel = styled(InputLabel)`
  width: 50%;
`;

const InputBox = styled.input`
  width: 100%;
  height: 2.8rem;

  margin: 0.4rem 0 1.4rem 0;

  border: 0.2rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
`;

const InputEmailBox = styled(InputBox)`
  width: 60%;
  margin-right: 1.2rem;
`;

const InputNameBox = styled(InputBox)`
  width: 70%;
`;

const EmailSelectBox = styled.select`
  width: 30%;
  height: 2.8rem;
  margin: 0.4rem 0 1.4rem 0;

  font-size: 1.4rem;
  font-family: 'Jua';

  ${mediaQuery[1]} {
    font-size: 1.1rem;
  }
`;

const InputButton = styled.button`
  width: 100%;
  height: 4rem;

  margin-top: 2.4rem;

  border: 0.4rem solid #c6a692;
  border-radius: 3rem;
  background-color: white;

  font-size: 1.9rem;
  font-family: 'Jua';

  color: #c6a692;
`;
