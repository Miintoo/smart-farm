import axios from 'axios';
import loginSuccess from './loginSuccess';

export default async function silentRefresh() {
  try {
    const accessToken = await axios.post('/silent-refresh');
    loginSuccess(accessToken.data.accessToken);
  } catch (error) {
    throw new Error('만료된 사용자 입니다.');
  }
}
