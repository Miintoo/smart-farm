import axios from 'axios';
import loginSuccess from './loginSuccess';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

export default async function silentRefresh() {
  try {
    const accessToken = await axios.post('/silent-refresh');
    loginSuccess(accessToken.data.accessToken);
  } catch (error) {
    throw new Error('만료된 사용자 입니다.');
  }
}

setTimeout(silentRefresh, JWT_EXPIRY_TIME - 60000);
