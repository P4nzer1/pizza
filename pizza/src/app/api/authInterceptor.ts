import axios, { AxiosInstance } from 'axios';
import store from '../store';
import axiosInstance from '../../shared/api/axiosInstance';
import { refreshTokenSuccess, refreshTokenFailure } from '../../features/Auth/model/authSlice';
import { BASE_URL } from '../../shared/api/constant';

export const setupAuthInterceptor = (axiosInstance: AxiosInstance, getState: () => any, dispatch: any) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = getState().auth.refreshToken;

        if (refreshToken) {
          try {
            const response = await axios.post(`${BASE_URL}/auth/refresh-token`, { token: refreshToken });

            dispatch(refreshTokenSuccess({
              accessToken: response.data.accessToken,
              refreshToken: response.data.refreshToken,
            }));

            originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

            return axiosInstance(originalRequest);
          } catch (refreshError) {
            dispatch(refreshTokenFailure('Session expired. Please login again.'));
          }
        }
      }

      return Promise.reject(error);
    }
  );
};

setupAuthInterceptor(axiosInstance, store.getState, store.dispatch);

export default axiosInstance;