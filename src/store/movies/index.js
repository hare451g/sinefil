/*
  Movie Reducer
  Handle state mutation for movies entity
*/
import { produce } from 'immer';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCESS,
  CLEAR_LIST,
  SELECT_MOVIE,
  UNSELECT_MOVIE,
} from './constants';

// initial state
const initialState = {
  isFetching: false,
  fetched: false,
  error: null,
  list: [],
  selectedListItem: {
    title: '',
    year: 0,
    imdbId: '',
    type: '',
    poster: '',
  },
  search: '',
  page: 1,
};

function movieReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_MOVIES:
        draft.error = null;
        draft.isFetching = true;
        draft.fetched = false;
        draft.search = action.payload.keyword || initialState.search;
        draft.page = action.payload.page || initialState.page;
        break;

      case FETCH_MOVIES_FAILED:
        draft.error =
          action.payload.errorMessages || 'An unhandled error occurred';
        draft.isFetching = false;
        draft.fetched = false;
        break;

      case FETCH_MOVIES_SUCCESS:
        draft.error = null;
        draft.isFetching = false;
        draft.fetched = true;
        draft.list = Array.from(
          new Set([...state.list, ...action.payload.list]),
        );
        break;

      case CLEAR_LIST:
        draft.list = [];
        break;

      case SELECT_MOVIE:
        draft.selectedListItem = action.payload.movie
          ? action.payload.movie
          : state.selectedListItem;
        break;

      case UNSELECT_MOVIE:
        draft.selectedListItem = initialState.selectedListItem;
        break;

      default:
        break;
    }
  });
}

export { initialState };
export default movieReducer;
