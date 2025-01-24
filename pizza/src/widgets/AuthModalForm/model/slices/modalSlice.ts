import { createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalState(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        },
    },
});

export const {
    setModalState,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;