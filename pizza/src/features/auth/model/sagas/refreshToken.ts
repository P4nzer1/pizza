import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { refreshToken } from '@/shared/api';
import { refreshTokenRequest, refreshTokenFailure, refreshTokenSuccess } from '../slices'

export function* handleRefreshToken(action: PayloadAction<string>) {
    try {
        yield put(refreshTokenRequest());
        const response: {
            accessToken: string; refreshToken: string
        } =
            yield call(refreshToken, action.payload);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        yield put(refreshTokenSuccess(response));
    } catch (error: unknown) {
        yield put(refreshTokenFailure((error as Error).message));
    }
}