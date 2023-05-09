import axios from 'axios';
import silentRefresh from './silentRefresh';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

export default function loginSuccess(response) {
  const { accessToken } = response.data;

  // accessToken 설정
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(silentRefresh, JWT_EXPIRY_TIME - 60000);
}
