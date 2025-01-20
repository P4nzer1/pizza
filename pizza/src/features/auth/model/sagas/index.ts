import { takeLatest } from 'redux-saga/effects';

import { sendCodeRequest, loginRequest, refreshTokenRequest } from '../slices';
import { handleSendCode } from './sendCode';
import { handleLogin } from './login';
import { handleRefreshToken } from './refreshToken';

export default function* authSaga() {
    yield takeLatest(sendCodeRequest.type, handleSendCode);
    yield takeLatest(loginRequest.type, handleLogin);
    yield takeLatest(refreshTokenRequest.type, handleRefreshToken);
}
