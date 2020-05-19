import {
  fetchMovies,
  fetchMovieSuccess,
  fetchMoviesFailed,
  clearList,
  selectMovie,
  unSelectMovie,
} from '../actions';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  CLEAR_LIST,
  SELECT_MOVIE,
  UNSELECT_MOVIE,
} from '../constants';
import movieLists from './__mock__/movieLists';

describe('Fetch movie', () => {
  it('Should return FETCH_MOVIES action type', () => {
    const dispatchedAction = fetchMovies();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES);
  });

  it('Should contain provided keyword', () => {
    const keyword = 'lorem';
    const dispatchedAction = fetchMovies(keyword);
    expect(dispatchedAction.payload.keyword).toEqual(keyword);
  });
});

describe('Fetch movie success', () => {
  it('Should return FETCH_MOVIES_SUCCESS action type', () => {
    const dispatchedAction = fetchMovieSuccess();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES_SUCCESS);
  });

  it('Should contain movie lists, even without providing list', () => {
    const dispatchedAction = fetchMovieSuccess();
    expect(dispatchedAction.payload.list).toEqual(expect.any(Array));
  });

  it('should contain movie list from response', () => {
    const dispatchedAction = fetchMovieSuccess(movieLists);
    expect(dispatchedAction.payload.list).toEqual(movieLists);
  });
});

describe('Fetch movie failed', () => {
  it('Should return FETCH_MOVIES_FAILED action type', () => {
    const dispatchedAction = fetchMoviesFailed();
    expect(dispatchedAction.type).toEqual(FETCH_MOVIES_FAILED);
  });

  it('Should contain error messages', () => {
    const errorMessages = 'Unhandled Error';
    const dispatchedAction = fetchMoviesFailed(errorMessages);

    expect(dispatchedAction.payload).toEqual({ errorMessages });
  });
});

describe('Clear List', () => {
  it('Should contain CLEAR_LIST action type', () => {
    const dispatchedAction = clearList();
    expect(dispatchedAction.type).toEqual(CLEAR_LIST);
  });
});

describe('Select one movie', () => {
  it('should return SELECT_MOVIE action type', () => {
    const dispatchedAction = selectMovie();
    expect(dispatchedAction.type).toEqual(SELECT_MOVIE);
  });

  it('should set selected list item to movie object', () => {
    const mockListItem = movieLists[0];
    const dispatchedAction = selectMovie(mockListItem);

    expect(dispatchedAction.payload).toEqual({
      movie: { ...mockListItem },
    });
  });
});

describe('Unselect movie', () => {
  it('should return UNSELECT_MOVIE action type', () => {
    const dispatchedAction = unSelectMovie();
    expect(dispatchedAction.type).toEqual(UNSELECT_MOVIE);
  });
});
