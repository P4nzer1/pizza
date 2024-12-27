import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuth: boolean;
    isLoading: boolean;
    error: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    phone: string;
    user: string;
}

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: null,
    accessToken: null,
    refreshToken: null,
    phone: '',
    user: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        sendCodeRequest(state, action: PayloadAction<{ phone: string }>) {
            state.isLoading = true;
            state.error = null;
            state.phone = action.payload.phone;
        },
        sendCodeSuccess(state) {
            state.isLoading = false;

        },
        sendCodeFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        verifyCodeRequest(state, action: PayloadAction<{ phone: string; code: string }>) {
            state.isLoading = true;
            state.error = null;
        },
        verifyCodeSuccess(state, action: PayloadAction<{
            accessToken: string;
            refreshToken: string;
            user?: string;
        }>) {
            state.isLoading = false;
            state.isAuth = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            if (action.payload.user) {
                state.user = action.payload.user;
            }
        },
        verifyCodeFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        refreshTokenRequest(state, action: PayloadAction<{ token: string }>) {
            state.isLoading = true;
            state.error = null;
        },
        refreshTokenSuccess(
            state,
            action: PayloadAction<{
                accessToken: string;
                refreshToken: string;
            }>
        ) {
            state.isLoading = false;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        refreshTokenFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        logoutRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        logoutSuccess(state) {
            state.isLoading = false;
            state.isAuth = false;
            state.accessToken = null;
            state.refreshToken = null;
            state.user = '';
        },
        logoutFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    sendCodeRequest,
    sendCodeSuccess,
    sendCodeFailure,

    verifyCodeRequest,
    verifyCodeSuccess,
    verifyCodeFailure,

    refreshTokenSuccess,
    refreshTokenFailure,
    refreshTokenRequest,

    logoutRequest,
    logoutSuccess,
    logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;
