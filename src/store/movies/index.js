/*
  Movie Reducer
  Handle state mutation for movies entity
*/

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
  switch (action.type) {
    default:
      return state;
  }
}

export { initialState };
export default movieReducer;
