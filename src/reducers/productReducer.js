const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST_ACTION':
      return action.payload;
    default:
      return state;
  }
}
