import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { sendCode, login, logout, refreshToken } from '../api/authApi';
import {
  sendCodeRequest,
  sendCodeSuccess,
  sendCodeFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure,
  logoutSuccess,
} from './authSlice';


function* handleSendCode(action: PayloadAction<string>) {
  try {
    yield call(sendCode, action.payload); 
    yield put(sendCodeSuccess()); 
  } catch (error: unknown) {
    yield put(sendCodeFailure((error as Error).message));
  }
}

function* handleLogin(action: PayloadAction<{ phone: string; code: string }>) {
  try {
    const response: { user: string; accessToken: string; refreshToken: string 
    } = 
    yield call(login, action.payload);
    yield put(loginSuccess(response)); 
  } catch (error: unknown) {
    yield put(loginFailure((error as Error).message));
  }
}

function* handleRefreshToken(action: PayloadAction<string>) {
  try {
      yield put(refreshTokenRequest());
      const response: { accessToken: string; refreshToken: string 
      } = 
      yield call(refreshToken, action.payload);
      yield put(refreshTokenSuccess(response));
  } catch (error: unknown) {
      yield put(refreshTokenFailure((error as Error).message)); 
  }
}

function* handleLogout(action: PayloadAction<string>) {
  try {
    yield call(logout, action.payload);
    yield put(logoutSuccess()); 
  } catch (error: unknown) {
    console.error((error as Error).message); 
  }
}

export default function* authSaga() {
  yield takeLatest(sendCodeRequest.type, handleSendCode);
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(refreshTokenRequest.type, handleRefreshToken)
  yield takeLatest(logoutSuccess.type, handleLogout);
}





