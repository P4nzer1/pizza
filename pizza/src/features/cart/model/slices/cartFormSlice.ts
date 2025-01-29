import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ItemState } from '@/entities/product/lib/types';

import { initialState } from '../../lib/constsnts';
import { variantStep } from '../../lib/types';

export const cartFormSlice = createSlice({
    name: 'cartForm',
    initialState,
    reducers: {
        setStep(state, action: PayloadAction<variantStep>) {
            state.step = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string|null>) {
            state.error = action.payload;
        },

        setClean(state, action: PayloadAction<boolean>) {
            state.clean = action.payload;
        },
        addItem(state, action: PayloadAction<ItemState>) {
            const existItem = state.items.find(item => item.id === action.payload.id);
            if (existItem) {
                existItem.quantity +=1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        deleteItem(state, action: PayloadAction<ItemState>) {
            const existItem = state.items.find(item => item.id === action.payload.id);
            if (existItem) {
                if (existItem.quantity > 1) {
                    existItem.quantity -=1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                }
            }
        },
        updateItem(state, action: PayloadAction<ItemState>) {
            const { id, quantity } = action.payload
            const existItem = state.items.find(item => item.id === id)
            if (existItem) {
                existItem.quantity = quantity;
            }
        },
    },
});

export const {
    setStep,
    setLoading,
    setError,
    setClean,
    addItem,
    deleteItem,
    updateItem
} = cartFormSlice.actions;

export const cartFormReducer = cartFormSlice.reducer;