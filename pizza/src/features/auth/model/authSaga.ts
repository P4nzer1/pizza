import { call, put, takeLatest } from 'redux-saga/effects';
import {
  sendCodeRequest,
  sendCodeSuccess,
  sendCodeFailure,

  verifyCodeRequest,
  verifyCodeSuccess,
  verifyCodeFailure,

  logoutRequest,
  logoutSuccess,
  logoutFailure,

  refreshTokenSuccess,
  refreshTokenFailure,
  refreshTokenRequest
} from '@/features/auth/model/authSlice';


import {
  sendCode,
  verifyCode,
  logout,
  refreshToken,  
} from '@/features/auth/api/AuthService';

function* handleSendCode(action: ReturnType<typeof sendCodeRequest>) {
  try {
    const { phone } = action.payload;
    yield call(sendCode, {phone} );
    yield put(sendCodeSuccess());
  } catch (error: any) {
    yield put(sendCodeFailure(error.message || 'Ошибка при отправке кода.'));
  }
}

function* handleVerifyCode(action: ReturnType<typeof verifyCodeRequest>) {
  try {
    const { phone, code } = action.payload;
    const response: {
      accessToken: string;
      refreshToken: string;
      user?: any;
    } = yield call(verifyCode, {phone, code});
    yield put(verifyCodeSuccess(response));
    localStorage.setItem('accessToken', response.accessToken);
  } catch (error: any) {
    yield put(verifyCodeFailure(error.message || 'Ошибка при верификации кода.'));
  }
}

function* handleLogout() {
  try {
    yield call(logout);
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error.message || 'Ошибка при выходе.'));
  }
}

function* handleRefreshToken(action: ReturnType<typeof refreshTokenRequest>) {
    try {
      const { token } = action.payload;
      const response: {
        accessToken: string;
        refreshToken: string;
      } = yield call(refreshToken, token);
      yield put(refreshTokenSuccess({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      }));
       localStorage.setItem('accessToken', response.accessToken);
       localStorage.setItem('refreshToken', response.refreshToken);
    } catch (error: any) {
      yield put(refreshTokenFailure(error.message || 'Ошибка при обновлении токена.'));
    }
  }

export default function* authSaga() {
  yield takeLatest(sendCodeRequest.type, handleSendCode);
  yield takeLatest(verifyCodeRequest.type, handleVerifyCode);
  yield takeLatest(logoutRequest.type, handleLogout);
  yield takeLatest(refreshTokenRequest.type, handleRefreshToken); 
}
