export interface TokenState {
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    error: string | null;
}
