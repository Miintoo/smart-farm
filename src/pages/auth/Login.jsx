import React from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import styled from '@emotion/styled';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors }
  } = useForm();

  // 로그인시 처리 로직
  const onSubmit = async () => {
    // axios.post('url주소', data).then((response) => {});
  };
  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInputBox
          type="email"
          name="email"
          placeholder="email"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식에 맞지 않습니다.'
            }
          })}
        />
        {errors.email && <AlertSmall>{errors.email.message}</AlertSmall>}
        <LoginInputBox
          type="password"
          name="password"
          placeholder="password"
          aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '8자리 이상 비밀번호를 사용하세요.'
            }
          })}
        />
        {errors.password && <AlertSmall role="alert">{errors.password.message}</AlertSmall>}
        <LoginButton type="submit" disabled={isSubmitting}>
          로그인
        </LoginButton>
      </LoginForm>
      <InfoButtonContainer>
        <InfoButtonItem>회원가입</InfoButtonItem>
        <InfoButtonItem>아이디찾기</InfoButtonItem>
        <InfoButtonItem>비밀번호찾기</InfoButtonItem>
      </InfoButtonContainer>
    </LoginBox>
  );
}

// css 부분
const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 35rem;
  vertical-align: middle;
  border: 3px solid #c6a692;
`;

const LoginTitle = styled.h2`
  height: 7rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 4rem;
  color: #c6a692;
`;

const LoginForm = styled.form`
  width: 45%;
  margin: 0 auto 2.8rem;
`;

const LoginInputBox = styled.input`
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  border: 0.15rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  font-size: 1.2rem;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 3.8rem;

  margin-top: 2rem;

  font-size: 1.6rem;
  font-weight: bold;
  color: #c6a692;
  background-color: white;

  border: 0.3rem solid #c6a692;
  border-radius: 0.9rem;
`;

const InfoButtonContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 45%;
  margin: auto;
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0.3;
`;

const InfoButtonItem = styled.li``;

const AlertSmall = styled.small`
  color: red;
`;
