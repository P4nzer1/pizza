import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setCode(state, action: PayloadAction<string>) {
            state.code = action.payload;
        },
        sendCodeRequest(state, action: PayloadAction<string>) {
            state.isSendCode = false;
            state.isLoading = true;
            state.error = null;
        },
        sendCodeSuccess(state) {
            state.isLoading = false;
            state.isSendCode = true;
        },
        sendCodeFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginRequest(state, action:PayloadAction<{ phone: string; code: string; }> ) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<{ user: string; accessToken: string; refreshToken: string; }>) {
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

    },
});

export const {
    setCode,
    setPhone,
    sendCodeRequest,
    sendCodeSuccess,
    sendCodeFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
} = authFormSlice.actions;

export default authFormSlice.reducer;