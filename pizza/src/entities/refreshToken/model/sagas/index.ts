import { takeLatest } from 'redux-saga/effects';

import { refreshTokenRequest } from '../slices/refreshSlice';

import { handleRefreshToken } from './refreshToken';

export default function* refreshSaga() {
    yield takeLatest(refreshTokenRequest.type, handleRefreshToken);
}
