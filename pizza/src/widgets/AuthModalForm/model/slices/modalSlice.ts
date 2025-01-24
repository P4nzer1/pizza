import { createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setVisibleModal(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload
        },
    },
});

export const {
    setVisibleModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;