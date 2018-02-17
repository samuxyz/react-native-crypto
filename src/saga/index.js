import { fork, all } from 'redux-saga/effects';

import { watchFetchCoinData } from './cryptoSaga';

export default function* rootSaga () {
  yield all([
    fork(watchFetchCoinData),
  ]);
}
