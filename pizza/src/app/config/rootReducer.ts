import { combineReducers } from '@reduxjs/toolkit';

import authSlice from '@/features/auth/model/authSlice';

const rootReducer = combineReducers({
    auth: authSlice,
});

export default rootReducer;