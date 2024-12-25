import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/model/authSlice';


const rootReducer = combineReducers({
  auth: authReducer, 
});

export default rootReducer;