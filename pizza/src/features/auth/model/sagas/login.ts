import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { login } from '@/shared/api';
import { loginSuccess, loginFailure } from '../slices'

export function* handleLogin(action: PayloadAction<{ phone: string; code: string }>) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if (accessToken && refreshToken) {
        yield put(loginSuccess({ user: '', accessToken, refreshToken }));
        return; 
    }
    try {
        const response: { user: string; accessToken: string; refreshToken: string } =
            yield call(login, action.payload);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        yield put(loginSuccess(response));
    } catch (error: unknown) {
        yield put(loginFailure((error as Error).message));
    }
}