// export default function validation(action) {
//   switch (action) {
//     case 'email':
//       return {
//         required: '이메일은 필수 입력입니다.',
//         pattern: {
//           value: /\S+@\S+\.\S+/,
//           message: '이메일 형식에 맞지 않습니다.'
//         }
//       };
//     case 'password':
//       return {
//         required: '비밀번호는 필수 입력입니다.',
//         minLength: {
//           value: 8,
//           message: '8자리 이상 비밀번호를 사용하세요.'
//         }
//         // pattern: {
//         //   value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]$/,
//         //   message: '하나이상의 문자 및 숫자 특수문자를 포함 해주세요.'
//         // }
//       };
//     case 'name':
//       return {
//         required: '이름은 필수 입력입니다.',
//         pattern: {
//           value: /^[가-힣]{2,4}$/,
//           message: '이름 형식에 맞지 않습니다.'
//         }
//       };
//     case 'phone':
//       return {
//         required: '전화번호는 필수 입력입니다.',
//         pattern: {
//           value: /^\d{3}-\d{3,4}-\d{4}$/,
//           message: '전화번호 형식에 맞지 않습니다.'
//         }
//       };
//     case 'deviceName':
//       return {
//         required: '디바이스 이름은 필수 입력입니다.'
//       };
//     case 'id':
//       return {
//         required: '시리얼 넘버는 필수 입력입니다.'
//       };
//     default:
//       return Error('알맞은 명령이 없습니다.');
//   }
// }

const validation = {
  email: {
    required: '이메일은 필수 입력입니다.',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: '이메일 형식에 맞지 않습니다.'
    }
  },
  password: {
    required: '비밀번호는 필수 입력입니다.',
    minLength: {
      value: 8,
      message: '8자리 이상 비밀번호를 사용하세요.'
    }
  },
  name: {
    required: '이름은 필수 입력입니다.',
    pattern: {
      value: /^[가-힣]{2,4}$/,
      message: '이름 형식에 맞지 않습니다.'
    }
  },
  phone: {
    required: '전화번호는 필수 입력입니다.',
    pattern: {
      value: /^\d{3}-\d{3,4}-\d{4}$/,
      message: '전화번호 형식에 맞지 않습니다.'
    }
  },
  deviceName: {
    required: '디바이스 이름은 필수 입력입니다.'
  },
  id: {
    required: '시리얼 넘버는 필수 입력입니다.'
  }
};

export default validation;
