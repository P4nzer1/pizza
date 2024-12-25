import axiosInstance from '../../../shared/api/axiosInstance';
import { AUTH_URL } from '../../../shared/api/constant';

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`${AUTH_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Invalid email or password.');
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};
export const sendCode = async (data: {phone:string}) => {
    try {
      const response = await axiosInstance.post(`${AUTH_URL}/send-code`, data);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            throw new Error('Invalid phone number.');
          case 500:
            throw new Error('Internal server error. Please try again later.');
          default:
            throw new Error('An unknown error occurred.');
        }
      }
      throw new Error('Network error. Please check your connection.');
    }
  };

export const refreshToken = async (token: string) => {
  try {
    const response = await axiosInstance.post(`${AUTH_URL}/refresh-token`, { token });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Refresh token expired. Please log in again.');
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(`${AUTH_URL}/logout`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          throw new Error('Internal server error. Please try again later.');
        default:
          throw new Error('An unknown error occurred.');
      }
    }
    throw new Error('Network error. Please check your connection.');
  }
};