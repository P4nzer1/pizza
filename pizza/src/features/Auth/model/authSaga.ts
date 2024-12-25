import { call, put, takeLatest } from 'redux-saga/effects';
import { login, logout, refreshToken, sendCode } from '../api/authApi';
import {
    sendCodeRequest,
    sendCodeSuccess,
    sendCodeFailure,
    refreshTokenRequest,
    refreshTokenSuccess,
    refreshTokenFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logout as logoutAction,
} from './authSlice';

interface sendCodeResponse {
    message: string;
    code: string
}
interface LoginResponse {
    user: string;
    accessToken: string;
    refreshToken: string;
}

interface RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

function* handleRefreshToken(action: ReturnType<typeof refreshTokenRequest>) {
    try {
        const data: RefreshTokenResponse = yield call(refreshToken, action.payload.token);
        yield put(refreshTokenSuccess({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
        return data;
    } catch (error: any) {
        yield put(refreshTokenFailure(error.response?.data?.message || 'Unable to refresh token'));
        throw error;
    }
}
function* handleSendCode(action: ReturnType<typeof sendCodeRequest>) {
    try {
        const data: sendCodeResponse = yield call(sendCode, action.payload);
        yield put(sendCodeSuccess(data));
    } catch (error: any) {
        yield put(sendCodeFailure(error.message || 'Failed to send code'));
    }
}

function* handleLogin(action: ReturnType<typeof loginRequest>) {
    try {
        const data: LoginResponse = yield call(login, action.payload);
        yield put(
            loginSuccess({
                user: data.user,
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
            })
        );
    } catch (error: any) {
        yield put(loginFailure(error.response?.data?.message || 'Login failed'));
    }
}


function* handleLogout() {
    try {
        yield call(logout);
        yield put(logoutAction());
    } catch (error) {
        console.error('Logout failed', error);
    }
}

export default function* authSaga() {
    yield takeLatest(sendCodeRequest.type, handleSendCode)
    yield takeLatest(loginRequest.type, handleLogin);
    yield takeLatest(refreshTokenRequest.type, handleRefreshToken);
    yield takeLatest(logoutAction.type, handleLogout);
}