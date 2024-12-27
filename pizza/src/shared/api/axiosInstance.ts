import axios from 'axios';
import API_ENDPOINTS from './constants';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosInstance;