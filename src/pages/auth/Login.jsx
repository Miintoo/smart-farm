import React from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import mediaQuery from '../../utils/breakPointUI';
import validation from '../../utils/validation';

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors }
  } = useForm();

  // 로그인시 처리 로직
  const onSubmit = async (data) => {
    try {
      await axios.post('http://34.64.88.23/api/login', data);
    } catch (error) {
      Error('axios 로그인 실패');
    }
  };
  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInputBox
          name="email"
          placeholder="email"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
          {...register('email', validation('email'))}
        />
        {errors.email && <AlertSmall>{errors.email.message}</AlertSmall>}
        <LoginInputBox
          name="password"
          placeholder="password"
          aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
          {...register('password', validation('password'))}
        />
        {errors.password && <AlertSmall role="alert">{errors.password.message}</AlertSmall>}
        <LoginButton type="submit" disabled={isSubmitting}>
          로그인
        </LoginButton>
      </LoginForm>
      <InfoButtonContainer>
        <InfoButtonItem
          onClick={() => {
            navigate('/register');
          }}
        >
          회원가입
        </InfoButtonItem>
        <InfoButtonItem>아이디찾기</InfoButtonItem>
        <InfoButtonItem>비밀번호찾기</InfoButtonItem>
      </InfoButtonContainer>
    </LoginBox>
  );
}

// css 부분
const LoginBox = styled.div`
  width: 46rem;
  height: 33rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 0.6rem solid #c6a692;

  ${mediaQuery[1]} {
    width: 80vw;
    height: 46rem;
  }

  ${mediaQuery[0]} {
    border: none;
  }
`;

const LoginTitle = styled.h2`
  height: 7rem;
  margin-top: 4rem;

  text-align: center;
  font-family: 'Jua';
  font-size: 4rem;
  font-weight: 400;

  color: #c6a692;
`;

const LoginForm = styled.form`
  width: 45%;
  margin: 0 auto 1.6rem;

  ${mediaQuery[1]} {
    width: 80%;
  }

  ${mediaQuery[0]} {
    width: 100%;
  }
`;

const LoginInputBox = styled.input`
  width: 100%;
  height: 4rem;
  margin: 0.5rem 0 0.2rem 0;
  padding-left: 0.5rem;
  border: 0.15rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;

  font-family: 'Jua';
  font-size: 1.1rem;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 3.8rem;
  margin-top: 2rem;

  font-family: 'Jua';
  font-size: 1.6rem;
  font-weight: 200;
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

  ${mediaQuery[1]} {
    width: 80%;
  }

  ${mediaQuery[0]} {
    width: 100%;
  }
`;

const InfoButtonItem = styled.li`
  font-family: 'Jua';

  cursor: pointer;
  &:hover {
    transition: 0.2s ease-out;
    color: #c6a692;
  }
`;

const AlertSmall = styled.small`
  font-family: 'Jua';
  color: red;
`;
