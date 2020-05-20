import { combineReducers } from 'redux';
import movieReducer from './movies';
import detailsReducer from './details';

export default combineReducers({
  movies: movieReducer,
  details: detailsReducer,
});
