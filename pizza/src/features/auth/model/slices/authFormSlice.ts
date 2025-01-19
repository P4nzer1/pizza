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
    },
});

export const {
    setCode,
    setPhone,
} = authFormSlice.actions;

export default authFormSlice.reducer;