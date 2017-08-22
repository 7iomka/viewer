import axios from 'axios';

const API_URI = 'http://smktesting.herokuapp.com';

export const onGetProducts = () => (dispatch) => {
  // Make a request for a user with a given ID
  axios.get(`${API_URI}/api/products/`)
    .then(response => dispatch({
      type: 'TEST_ACTION',
      payload: response.data,
    }));
};
