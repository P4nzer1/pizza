import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        sendCodeRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        sendCodeSuccess(state) {
            state.isLoading = false;
            state.isCodeSent = true;
        },
        sendCodeFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{user: string; accessToken: string; refreshToken: string;}>) {
            state.isLoading = false;
            state.isAuth = true;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        refreshTokenRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        refreshTokenSuccess(state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) {
            state.isLoading = false;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        refreshTokenFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        
        logoutSuccess(state) {
            state.isLoading = false;
            state.isAuth = false;
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const {
    sendCodeRequest,
    sendCodeSuccess,
    sendCodeFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    refreshTokenRequest,
    refreshTokenSuccess,
    refreshTokenFailure,
    logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

