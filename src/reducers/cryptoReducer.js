export const FETCH_COIN_DATA = 'FETCH_COIN_DATA';
export const FETCH_COIN_DATA_SUCCESS = 'FETCH_COIN_DATA_SUCCESS';
export const FETCH_COIN_DATA_FAIL = 'FETCH_COIN_DATA_FAIL';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_COIN_DATA: return {
      isFetching: true,
      data: [],
      hasError: false,
      errorMessage: null,
    };
    case FETCH_COIN_DATA_SUCCESS: return {
      isFetching: false,
      data: action.payload,
      hasError: false,
      errorMessage: null,
    };
    case FETCH_COIN_DATA_FAIL: return {
      isFetching: false,
      data: [],
      hasError: true,
      errorMessage: action.payload,
    };
    default: return state;
  }
};

export const fetchCoinData = () => {
  return {
    type: FETCH_COIN_DATA,
  };
};

export const fetchCoinDataSuccess = (payload) => {
  return {
    type: FETCH_COIN_DATA_SUCCESS,
    payload,
  };
};

export const fetchCoinDataFail = (payload) => {
  return {
    type: FETCH_COIN_DATA_FAIL,
    payload,
  };
};
