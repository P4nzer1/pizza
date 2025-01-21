import { handleAxiosError } from '@/shared/api/';

import { axiosInstance, AUTH_URL } from '@/shared/api/';

export const refreshToken = async (token: string) => {
    try {
        const response = await axiosInstance.post(`${AUTH_URL}/refresh-token`, { token });
        return response.data;
    } catch (error) {
        throw handleAxiosError(error);
    }
};