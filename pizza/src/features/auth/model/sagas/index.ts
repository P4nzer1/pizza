import { takeLatest } from 'redux-saga/effects';

import { sendCodeRequest, loginRequest } from '../slices';
import { handleSendCode } from './sendCode';
import { handleLogin } from './login';

export default function* authSaga() {
    yield takeLatest(sendCodeRequest.type, handleSendCode);
    yield takeLatest(loginRequest.type, handleLogin);
}
