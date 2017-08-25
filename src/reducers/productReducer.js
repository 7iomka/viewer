import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_ERROR,
} from 'constants/actionTypes';

const initialState = {};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return false;
    case FETCHING_PRODUCTS_SUCCESS:
      return action.payload;
    case FETCHING_PRODUCTS_ERROR:
      return action.payload;
    default:
      return state;
  }
}
