import { all } from 'redux-saga/effects';

import authSaga from '@/features/auth/model/sagas';

export function* rootSaga() {
    yield all([
        authSaga(),
    ]);
}