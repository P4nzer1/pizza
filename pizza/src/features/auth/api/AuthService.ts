import axiosInstance from '@/shared/api/axiosInstance';
import API_ENDPOINTS from '@/shared/api/constants';

export const sendCode = async (data: { phone: string }) => {
  try {
    const response = await axiosInstance.post(`${API_ENDPOINTS.AUTH_URL}/send-code`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          throw new Error('Ошибка сервера. Повторите попытку позже.');
        default:
          throw new Error('Произошла неизвестная ошибка.');
      }
    }
    throw new Error('Проблема с сетью. Проверьте подключение к интернету.');
  }
};

export const verifyCode = async (data: { phone: string; code: string }) => {
  try {
    const response = await axiosInstance.post(`${API_ENDPOINTS.AUTH_URL}/verify-code`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Неверный телефон или код.');
        case 500:
          throw new Error('Ошибка сервера. Повторите попытку позже.');
        default:
          throw new Error('Произошла неизвестная ошибка.');
      }
    }
    throw new Error('Проблема с сетью. Проверьте подключение к интернету.');
  }
};

export const refreshToken = async (token: string) => {
  try {
    const response = await axiosInstance.post(`${API_ENDPOINTS.AUTH_URL}/refresh-token`, { token });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error('Refresh-токен истёк. Повторите вход.');
        case 500:
          throw new Error('Ошибка сервера. Повторите попытку позже.');
        default:
          throw new Error('Произошла неизвестная ошибка.');
      }
    }
    throw new Error('Проблема с сетью. Проверьте подключение к интернету.');
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(`${API_ENDPOINTS.AUTH_URL}/logout`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          throw new Error('Ошибка сервера. Повторите попытку позже.');
        default:
          throw new Error('Произошла неизвестная ошибка.');
      }
    }
    throw new Error('Проблема с сетью. Проверьте подключение к интернету.');
  }
};
