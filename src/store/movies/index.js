/*
  Movie Reducer
  Handle state mutation for movies entity
*/
import { produce } from 'immer';
import { FETCH_MOVIES, FETCH_MOVIES_FAILED } from './constants';

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
        break;
      default:
        break;
    }
  });
}

export { initialState };
export default movieReducer;
