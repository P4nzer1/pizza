import { all } from 'redux-saga/effects';
import authSaga from '../features/Auth/model/authSaga'; 


export default function* rootSaga() {
  yield all([
    authSaga(),    
  ]);
}