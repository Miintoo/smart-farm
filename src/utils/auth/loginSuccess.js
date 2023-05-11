import axios from 'axios';

export default function loginSuccess(token) {
  // accessToken 설정
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
