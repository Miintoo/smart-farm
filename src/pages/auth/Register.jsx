import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import mediaQuery from '../../utils/breakPointUI';
import validation from '../../utils/validation';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    getValues
  } = useForm();

  const onSubmit = async () => {};

  return (
    <RegisterBox>
      <RegisterTitle>환영합니다!</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="email">이메일</InputLabel>
        <InputEmailBox
          id="email"
          name="email"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
          {...register('email', validation('email'))}
        />
        {errors.email && <AlertSmall>{errors.email.message}</AlertSmall>}

        <InputLabel htmlFor="password">비밀번호</InputLabel>
        <InputBox
          id="password"
          name="password"
          type="password"
          aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
          {...register('password', validation('password'))}
        />
        {errors.password && <AlertSmall role="alert">{errors.password.message}</AlertSmall>}

        <InputLabel htmlFor="passwordConfirm">비밀번호 확인</InputLabel>
        <InputBox
          id="passwordConfirm"
          type="password"
          {...register('passwordConfirm', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '8자리 이상 비밀번호를 사용하세요.'
            },
            validate: {
              check: (value) => {
                const { password } = getValues();
                return password === value || '비밀번호가 일치하지 않습니다.';
              }
            }
          })}
        />
        {errors.passwordConfirm && <AlertSmall role="alert">{errors.passwordConfirm.message}</AlertSmall>}
        <NamePhoneBox>
          <NameBox>
            <InputNameLabel htmlFor="name">이름</InputNameLabel>
            <InputNameBox id="name" type="text" {...register('name', validation('name'))} />
            {errors.name && <AlertSmall role="alert">{errors.name.message}</AlertSmall>}
          </NameBox>
          <PhoneBox>
            <InputPhoneLabel htmlFor="phone">전화번호</InputPhoneLabel>
            <InputBox id="phone" type="text" {...register('phone', validation('phone'))} />
            {errors.phone && <AlertSmall role="alert">{errors.phone.message}</AlertSmall>}
          </PhoneBox>
        </NamePhoneBox>
        <InputButton type="submit" disabled={isSubmitting}>
          가입하기
        </InputButton>
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

  margin: 0.4rem 0 0.6rem 0;

  border: 0.2rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
`;

const InputEmailBox = styled(InputBox)`
  width: 60%;
`;

const InputNameBox = styled(InputBox)`
  width: 70%;
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

const AlertSmall = styled.small`
  display: block;
  margin-bottom: 1rem;

  font-family: 'Jua';
  font-size: 1.2rem;
  color: red;
`;
