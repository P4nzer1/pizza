import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

const sendCodeSlice = createSlice({
    name: 'sendCode',
    initialState,
    reducers: {
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
    },
});

export const {
    sendCodeRequest,
    sendCodeSuccess,
    sendCodeFailure,
} = sendCodeSlice.actions;

export default sendCodeSlice.reducer;