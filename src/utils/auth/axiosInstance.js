import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://reactjs.kr/api' });

export default axiosInstance;
