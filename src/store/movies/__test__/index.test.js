import {
  fetchMovies,
  fetchMoviesFailed,
  fetchMovieSuccess,
  clearList,
  selectMovie,
  unSelectMovie,
} from '../actions';
import movieReducer, { initialState } from '../index';
import movieLists, { page2 } from './__mock__/movieLists';

describe('Movie Reducer Test', () => {
  const unknownAction = {
    type: 'unkonwn',
  };

  it('Should return current state in default case', () => {
    expect(movieReducer(undefined, unknownAction)).toEqual(initialState);
  });

  describe('Start fetch movie list', () => {
    it('should set isFetching to true, and fetched to false', () => {
      expect(movieReducer(undefined, fetchMovies())).toEqual({
        ...initialState,
        isFetching: true,
        fetched: false,
      });
    });

    it('should set keyword into search', () => {
      const keyword = 'lorem';
      const reducer = movieReducer(undefined, fetchMovies(keyword));
      expect(reducer.search).toEqual(keyword);
    });

    it('should set page into search', () => {
      const targetPage = 3;
      const reducer = movieReducer(
        undefined,
        fetchMovies(undefined, targetPage),
      );
      expect(reducer.page).toEqual(targetPage);
    });
  });

  describe('Fetch movie list failed', () => {
    it('it should set isFetching to false', () => {
      const reducer = movieReducer(undefined, fetchMoviesFailed());
      expect(reducer.isFetching).toBe(false);
    });

    it(
      'it should set error message to An unhandled error occurred ' +
        'when no error message provided',
      () => {
        const reducer = movieReducer(undefined, fetchMoviesFailed());
        expect(reducer.error).toBe('An unhandled error occurred');
      },
    );

    it('it should set error message to provided error message ', () => {
      const errorMessages = 'Too many results.';
      const reducer = movieReducer(undefined, fetchMoviesFailed(errorMessages));
      expect(reducer.error).toBe(errorMessages);
    });
  });

  describe('Fetch movie success', () => {
    const mockTotalResults = 953;
    const mockNextPage = 2;
    const mockTotalPage = Math.ceil(mockTotalResults / 10);
    const movieListsPage2 = page2;

    it('should set isFetching to false, and loaded to true', () => {
      const dispatchedAction = fetchMovieSuccess(
        movieLists,
        mockTotalResults,
        mockNextPage,
        mockTotalPage,
      );

      expect(movieReducer(undefined, dispatchedAction)).toEqual({
        ...initialState,
        isFetching: false,
        fetched: true,
        list: movieLists,
        totalResults: mockTotalResults,
        nextPage: mockNextPage,
        totalPage: mockTotalPage,
      });
    });

    it('should merge with previous array when change to next page', () => {
      const state = {
        ...initialState,
        fetched: true,
        list: movieLists,
      };

      const dispatchedAction = fetchMovieSuccess(
        movieListsPage2,
        mockTotalResults,
        mockNextPage,
        mockTotalPage,
      );

      const reducer = movieReducer(state, dispatchedAction);

      expect(reducer.list).toEqual([...movieLists, ...movieListsPage2]);
    });

    it('should set fetched movies into movie reducer list', () => {
      const reducer = movieReducer(undefined, fetchMovieSuccess(movieLists));
      expect(reducer.list).toEqual(movieLists);
    });
  });

  describe('Clear movie list', () => {
    it('should clear movie list', () => {
      const state = { ...initialState, list: movieLists };
      const reducer = movieReducer(state, clearList());
      expect(reducer.list).toEqual([]);
    });
  });

  describe('Select one movie', () => {
    it('Should set selectedListItem to provided movie object', () => {
      const mockMovie = movieLists[0];
      const reducer = movieReducer(undefined, selectMovie(mockMovie));
      expect(reducer.selectedListItem).toEqual(mockMovie);
    });
  });

  describe('Unselect movie', () => {
    it(
      'Should remove current movie selection' +
        'and revert back to initial state',
      () => {
        const state = { ...initialState, selectedListItem: movieLists[0] };
        const reducer = movieReducer(state, unSelectMovie());
        expect(reducer.selectedListItem).toEqual(initialState.selectedListItem);
      },
    );
  });
});
