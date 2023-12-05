import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_PRODUCTS } from '../types/actionTypes';
import api from '../../utils/api';
import { fetchProductsFailed, setProducts } from '../actions/productActions';

function* fetchProductsSaga() {
  try {
    const response = yield call(api.get, '/products');
    yield put(setProducts(response.data));
  } catch (error) {
    yield put(fetchProductsFailed(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}
