import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_COIN_DATA,
  fetchCoinDataSuccess,
  fetchCoinDataFail,
} from '../reducers/cryptoReducer';
import { url } from '../constants';

const getCurrency = () => {
  return fetch(`${url}/v1/ticker/?limit=10`).then(response => response.json());
};

function* fetchCoinData () {
  try {
    const response = yield call(getCurrency);
    yield put(fetchCoinDataSuccess(response));
  } catch (e) {
    yield put(fetchCoinDataFail(e));
  }
}

export function* watchFetchCoinData () {
  yield takeLatest(FETCH_COIN_DATA, fetchCoinData);
}
