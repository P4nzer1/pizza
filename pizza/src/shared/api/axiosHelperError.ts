import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown) => {
    const err = error as AxiosError;
    if (err.response) {
        switch (err.response.status) {
            case 400:
                return new Error('Ошибка валидации. Проверьте введённые данные.');
            case 401:
                return new Error('Неверные данные для входа.');
            case 500:
                return new Error('Внутренняя ошибка сервера. Попробуйте позже.');
            default:
                return new Error('Произошла неизвестная ошибка.');
        }
    }
    return new Error('Ошибка сети. Проверьте ваше подключение.');
};
