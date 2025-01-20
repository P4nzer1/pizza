export interface AuthState {
    phone: string;
    code: string;
    user: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    isSendCode: boolean;
    isAuth: boolean;
    isOpen: boolean;
    error: string | null;
}
