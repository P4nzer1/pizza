import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginRequest(state ) {
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
    loginRequest,
    loginSuccess,
    loginFailure,
} = loginSlice.actions;

export default loginSlice.reducer;
