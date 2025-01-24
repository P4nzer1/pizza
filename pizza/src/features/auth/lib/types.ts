export type VariantStep = 'phone' | 'code';

export interface AuthState {
    phone: string;
    code: string;
    user: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    isSendCode: boolean;
    isAuth: boolean;
    error: string | null;
    step: VariantStep;
}