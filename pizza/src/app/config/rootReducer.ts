import { combineReducers } from '@reduxjs/toolkit';

import { authFormSlice } from '@/features/auth/model/slices';
import { modalSlice } from '@/widgets/AuthModalForm/model/slices';
import { refreshSlice } from '@/entities/refreshToken/model/slices';

export const rootReducer = combineReducers({
    refresh: refreshSlice,
    authForm: authFormSlice,
    modal: modalSlice
});
