import {
  fetchMovies,
  fetchMovieSuccess,
  fetchMoviesFailed,
} from '../../store/movies/actions';
import mockStore from '../../__mock__/store';

import fetchMoviesThunk from '../fetchMoviesThunk';

describe('Fetch movies thunk', () => {
  const mockPage = 1;

  it('handle request for fetching movies', async () => {
    const store = mockStore();
    const mockKeyword = 'holiday';
    await store.dispatch(fetchMoviesThunk(mockKeyword, mockPage));
    const actions = await store.getActions();

    expect(actions[0]).toEqual(fetchMovies(mockKeyword, mockPage));
    // success
    expect(actions[1].type).toEqual(fetchMovieSuccess().type);
    expect(actions[1].payload.list).toEqual(expect.any(Array));
    expect(actions[1].payload.totalResults).toBeGreaterThan(1);
    expect(actions[1].payload.nextPage).toBeGreaterThanOrEqual(2);
    expect(actions[1].payload.totalPage).toBeGreaterThanOrEqual(1);
  });

  it(
    'Should safely return error messages' +
      ' when response got too many results ',
    async () => {
      const store = mockStore();
      const mockKeyword = 'h';
      await store.dispatch(fetchMoviesThunk(mockKeyword, mockPage));
      const actions = await store.getActions();

      expect(actions[0]).toEqual(fetchMovies(mockKeyword, mockPage));

      expect(actions[1].type).toEqual(
        fetchMoviesFailed('Too many results.').type,
      );
      expect(actions[1].payload.errorMessages).toEqual('Too many results.');
    },
  );

  it(
    'Should safely return error messages' +
      ' when web service got unhandled error',
    async () => {
      const store = mockStore();

      await store.dispatch(fetchMoviesThunk(undefined, mockPage));
      const actions = await store.getActions();

      expect(actions[0]).toEqual(fetchMovies(undefined, mockPage));

      expect(actions[1].type).toEqual(
        fetchMoviesFailed('Keyword is required').type,
      );
      expect(actions[1].payload.errorMessages).toEqual('Keyword is required');
    },
  );
});
