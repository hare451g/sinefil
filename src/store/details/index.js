/*
  Movie Reducer
  Handle state mutation for movies entity
*/
import { produce } from 'immer';
import {
  FETCH_DETAILS,
  FETCH_DETAILS_FAILED,
  FETCH_DETAILS_SUCCESS,
} from './constants';

// initial state
const initialState = {
  isFetching: false,
  fetched: false,
  error: null,
  list: [],
  imdbID: null,
  details: {
    title: '',
    year: '',
    rated: '',
    released: '',
    runtime: '',
    genre: '',
    director: '',
    writer: '',
    actors: '',
    plot: '',
    language: '',
    country: '',
    awards: '',
    poster: '',
    ratings: [],
    metascore: 0,
    imdbRating: 0,
    imdbVotes: 0,
    imdbID: null,
    type: '',
    dvd: '',
    boxOffice: '',
    production: '',
    website: '',
  },
};

function movieReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DETAILS:
        draft.error = null;
        draft.isFetching = true;
        draft.fetched = false;
        draft.imdbID = action.payload.imdbID || initialState.imdbID;
        break;

      case FETCH_DETAILS_FAILED:
        draft.error =
          action.payload.errorMessage || 'An unhandled error occurred';
        draft.isFetching = false;
        draft.fetched = false;
        break;

      case FETCH_DETAILS_SUCCESS:
        draft.error = null;
        draft.isFetching = false;
        draft.fetched = true;
        draft.details = action.payload.details;
        break;

      default:
        break;
    }
  });
}

export { initialState };
export default movieReducer;
