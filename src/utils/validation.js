export default function validation(action) {
  switch (action) {
    case 'email':
      return {
        required: '이메일은 필수 입력입니다.',
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: '이메일 형식에 맞지 않습니다.'
        }
      };
    case 'password':
      return {
        required: '비밀번호는 필수 입력입니다.',
        minLength: {
          value: 8,
          message: '8자리 이상 비밀번호를 사용하세요.'
        }
      };
    case 'name':
      return {
        required: '이름은 필수 입력입니다.',
        pattern: {
          value: /^[가-힣]{2,4}$/,
          message: '이름 형식에 맞지 않습니다.'
        }
      };
    case 'phone':
      return {
        required: '전화번호는 필수 입력입니다.',
        pattern: {
          value: /^\d{3}-\d{3,4}-\d{4}$/,
          message: '전화번호 형식에 맞지 않습니다.'
        }
      };
    default:
      return Error('알맞은 명령이 없습니다.');
  }
}
