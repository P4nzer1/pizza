// mainUrl
export const BASE_URL = 'http://localhost:5000';

export const createApi = (baseUrl: string, endpoint?: string): string => {
    return endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
};


export const AUTH_URL = createApi(BASE_URL,'api/auth');