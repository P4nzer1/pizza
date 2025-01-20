import { AuthState } from "./interface";

export const initialState: AuthState = {
    phone: '',
    code: '',
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    isSendCode: false,
    isAuth: false,
    isOpen: false,
    error: null,
};

