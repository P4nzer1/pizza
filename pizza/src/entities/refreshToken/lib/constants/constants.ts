import { TokenState } from "../types/types";

export const initialState: TokenState = {
    accessToken: 'someAccessToken',
    refreshToken: 'someRefreshToken',
    isLoading: false,
    error: null,
};