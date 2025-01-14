import { AxiosError } from 'axios';

import axiosInstance from '@/shared/api/axiosInstance';
import { AUTH_URL } from '@/shared/api/constants';

export const sendCode = async (phone: string) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/send-code`, { phone });
        return response.data;
    } catch (error: unknown) {
        const err = error as AxiosError;
        if (err.response) {
            switch (err.response.status) {
                case 400:
                    throw new Error('Ошибка валидации: неверный номер телефона.');
                case 500:
                    throw new Error('Внутренняя ошибка сервера. Попробуйте позже.');
                default:
                    throw new Error('Произошла неизвестная ошибка.');
            }
        }
        throw new Error('Ошибка сети. Проверьте ваше подключение.');
    }
};

export const login = async (data: { phone: string; code: string }) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/login`, data);
        return response.data;
    } catch (error: unknown) {
        const err = error as AxiosError;
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    throw new Error('Неверный номер телефона или код.');
                case 500:
                    throw new Error('Внутренняя ошибка сервера. Попробуйте позже.');
                default:
                    throw new Error('Произошла неизвестная ошибка.');
            }
        }
        throw new Error('Ошибка сети. Проверьте ваше подключение.');
    }
};

export const refreshToken = async (token: string) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/refresh-token`, { token });
        return response.data;
    } catch (error: unknown) {
        const err = error as AxiosError;
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    throw new Error('Refresh token истёк. Выполните вход заново.');
                case 500:
                    throw new Error('Внутренняя ошибка сервера. Попробуйте позже.');
                default:
                    throw new Error('Произошла неизвестная ошибка.');
            }
        }
        throw new Error('Ошибка сети. Проверьте ваше подключение.');
    }
};

export const logout = async (token: string) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/logout`, { token });
        return response.data;
    } catch (error: unknown) {
        const err = error as AxiosError;
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    throw new Error('Вы уже вышли из системы или токен недействителен.');
                case 500:
                    throw new Error('Внутренняя ошибка сервера. Попробуйте позже.');
                default:
                    throw new Error('Произошла неизвестная ошибка.');
            }
        }
        throw new Error('Ошибка сети. Проверьте ваше подключение.');
    }
};


