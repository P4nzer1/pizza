export interface AuthState {
    user: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    isCodeSent: boolean;
    isAuth: boolean;
    error: string | null;
}

export const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    isCodeSent: false,
    isAuth: false,
    error: null,
};
