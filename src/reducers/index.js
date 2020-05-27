import { dataReducer } from './dataReducer';
import { forecastReducer } from './forecastReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  data: dataReducer,
  forecast: forecastReducer,
});

