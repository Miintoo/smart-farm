import axios from 'axios';
import loginSuccess from './loginSuccess';

export default async function silentRefresh() {
  try {
    const accessToken = await axios.post('/silent-refresh');
    console.log(accessToken);
    loginSuccess(accessToken.data.accessToken);
  } catch (error) {
    throw Error('만료된 사용자 입니다.');
  }
}
