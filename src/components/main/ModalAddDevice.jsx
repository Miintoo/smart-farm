import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import validation from '../../utils/validation';
import instance from '../../utils/auth/interceptor';

export default function ModalAddDevice({ onClick, updateDevice }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    try {
      const response = await instance.post('/devices', data);
      updateDevice(response);
      onClick();
    } catch (error) {
      Error('제품이 정상적으로 등록되지 않았습니다.');
    }
  };

  return (
    <>
      <Container>
        <ContentContainer>
          <Title>추가 제품의 정보를 입력해주세요!</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DeviceInput
              type="text"
              placeholder="디바이스 이름"
              name="deviceName"
              aria-invalid={!isDirty ? undefined : errors.deviceName ? 'true' : 'false'}
              {...register('deviceName', validation('deviceName'))}
            />
            {errors.deviceName && <AlertSmall>{errors.deviceName.message}</AlertSmall>}

            <DeviceInput
              type="text"
              placeholder="시리얼 번호"
              name="id"
              aria-invalid={!isDirty ? undefined : errors.id ? 'true' : 'false'}
              {...register('id', validation('id'))}
            />
            {errors.id && <AlertSmall>{errors.id.message}</AlertSmall>}

            <ButtonTitle type="submit" disabled={isSubmitting}>
              입력
            </ButtonTitle>
          </Form>
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

  width: 40vw;
  height: 40vh;
  padding: 0rem 2rem;
  border: 1rem solid #c6a692;
  border-radius: 1rem;

  background-color: white;

  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
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

  color: #c6a692;

  text-align: center;
  font-size: 2.6rem;
  font-family: 'Jua';
`;

const Form = styled.form`
  margin-top: 2rem;
`;

const DeviceInput = styled.input`
  display: block;
  width: 80%;
  height: 3rem;
  padding: 2rem;
  margin: 0 auto 1.2rem;
  border: 0.3rem solid #c6a692;
  border-radius: 1rem;

  font-family: 'Jua';
  font-size: 1.8rem;

  opacity: 0.4;
`;

const ButtonTitle = styled.button`
  display: block;
  width: 10rem;
  padding-top: 0.4rem;
  margin: 3.5rem auto 0;
  border: 0.3rem solid #c6a692;
  border-radius: 3rem;

  background-color: white;
  color: #c6a692;

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

const AlertSmall = styled.small`
  display: block;
  width: 80%;
  margin: 0 auto 1rem;

  color: red;

  font-family: 'Jua';
  font-size: 1.2rem;
`;
