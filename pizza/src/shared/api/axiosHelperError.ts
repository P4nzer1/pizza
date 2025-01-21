import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown) => {
    const err = error as AxiosError;
    if (err.response) {
        const { message } = err.response.data as { message?: string };
        const status = err.response.status;

        switch (status) {
            case 400:
                return new Error(message || 'Некорректный запрос (400)');
            case 401:
                return new Error(message || 'Неавторизован (401)');
            case 403:
                return new Error(message || 'Доступ запрещён (403)');
            case 404:
                return new Error(message || 'Ресурс не найден (404)');
            case 500:
                return new Error(message || 'Ошибка сервера (500)');
            default:
                return new Error(message || `Ошибка с кодом ${status}`);
        }
    }
    if (err.request) {
        return new Error('Нет ответа от сервера. Проверьте подключение к сети.');
    }
    return new Error(err.message || 'Произошла непредвиденная ошибка.');
};
