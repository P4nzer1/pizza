import { createSlice} from '@reduxjs/toolkit';

import { initialState } from '../../lib/constants';

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true
        },
        closeModal(state) {
            state.isOpen = false
        },
    },
});

export const {
    openModal,
    closeModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;