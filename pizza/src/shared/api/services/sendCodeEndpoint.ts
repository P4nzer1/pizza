import { handleAxiosError } from '@/shared/api/';

import axiosInstance, { AUTH_URL } from '@/shared/api/';

export const sendCode = async (phone: string) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/send-code`, { phone });
        return response.data;
    } catch (error) {
        throw handleAxiosError(error);
    }
};