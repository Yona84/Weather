export const forecastReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FORECAST':
      return {
        ...state,
        forecast: action.payload
      };
    default:
      return state;
  }
};
