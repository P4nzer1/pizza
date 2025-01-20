import { call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { sendCode } from '@/shared/api';
import { sendCodeSuccess, sendCodeFailure } from '../slices';

export function* handleSendCode(action: PayloadAction<string>) {
    try {
        yield call(sendCode, action.payload);
        yield put(sendCodeSuccess());
    } catch (error: unknown) {
        yield put(sendCodeFailure((error as Error).message));
    }
}
