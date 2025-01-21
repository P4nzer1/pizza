import { AuthState } from "./types";

export const initialState: AuthState = {
    phone: '',
    code: '',
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    isSendCode: false,
    isAuth: false,
    error: null,
};

