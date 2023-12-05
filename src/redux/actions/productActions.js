import { FETCH_PRODUCTS, SET_PRODUCTS, FETCH_PRODUCTS_FAILED } from '../types/actionTypes';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const fetchProductsFailed = (error) => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: error,
});