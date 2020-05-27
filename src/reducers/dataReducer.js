export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA_PENDING':
      return {
        ...state,
        loader: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loader: false,
      };
    default:
      return state;
  }
};
