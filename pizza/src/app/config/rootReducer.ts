import { combineReducers } from '@reduxjs/toolkit';

import { authFormReducer} from '@/features/auth/model/slices';
import { modalReducer } from '@/widgets/AuthModalForm/model/slices';
import { refreshReducer } from '@/entities/refreshToken/model/slices';

export const rootReducer = combineReducers({
    refresh: refreshReducer,
    authForm: authFormReducer,
    modal: modalReducer
});
