import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

const refreshSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
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
    },
});

export const {
    refreshTokenRequest,
    refreshTokenSuccess,
    refreshTokenFailure,
} = refreshSlice.actions;

export default refreshSlice.reducer;
