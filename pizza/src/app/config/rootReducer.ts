import { combineReducers } from '@reduxjs/toolkit';

import { loginSlice, refreshSlice, sendCodeSlice, authFormSlice  } from '@/features/auth/model/slices';

const rootReducer = combineReducers({
    login: loginSlice,
    refresh: refreshSlice,
    sendCode: sendCodeSlice,
    authForm: authFormSlice,
});

export default rootReducer;