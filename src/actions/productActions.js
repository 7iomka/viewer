import axios from 'axios';

import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_ERROR,
} from 'constants/actionTypes';

const API_URI = 'http://smktesting.herokuapp.com';

export const onGetProducts = () => async (dispatch) => {
  dispatch({
    type: FETCHING_PRODUCTS,
  });
  try {
    // Make a request for all products
    const res = await axios.get(`${API_URI}/api/products/`);
    dispatch({
      type: FETCHING_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCHING_PRODUCTS_ERROR,
      payload: err,
    });
    console.log(err); // oh noes, we got an error
  }
};

