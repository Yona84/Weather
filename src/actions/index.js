const LAT = 32.078188;
const LONG = 34.782245;

export const fetchData = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_DATA_PENDING' });
    const rawResponse = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${LONG}&lat=${LAT}`, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': '9c8b23394fmsh51f603e83e47172p1a67c6jsn13b2f8203095'
      }
    });
    const content = await rawResponse.json();
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: content.data });
  };
};

export const fetchForecast = () => {
  return async dispatch => {
    const rawResponse = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly?lang=en&hours=48&lat=${LAT}&lon=${LONG}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "9c8b23394fmsh51f603e83e47172p1a67c6jsn13b2f8203095"
      }
    })
    const content = await rawResponse.json();
    dispatch({ type: 'FETCH_FORECAST', payload: content.data });
  };
};
