import { handleAxiosError } from '@/shared/api/';

import { axiosInstance, AUTH_URL } from '@/shared/api/';

export const login = async (data: { phone: string; code: string }) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/login`, data);
        return response.data;
    } catch (error) {
        throw handleAxiosError(error);
    }
};