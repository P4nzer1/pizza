import { TokenState } from "./types";

export const initialState: TokenState = {
    refreshToken: null,
    accessToken: null,
    isLoading: false,
    error: null,
};