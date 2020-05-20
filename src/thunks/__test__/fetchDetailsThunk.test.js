import {
  fetchDetails,
  fetchDetailsSuccess,
  fetchDetailsFailed,
} from '../../store/details/actions';
import mockStore from '../../__mock__/store';

import fetchDetailsThunk from '../fetchDetailsThunk';

describe('Fetch movies thunk', () => {
  const imdbID = 'tt0114369';

  it('handle request for fetching movies', async () => {
    const store = mockStore();
    await store.dispatch(fetchDetailsThunk(imdbID));
    const actions = await store.getActions();

    expect(actions[0]).toEqual(fetchDetails(imdbID));
    // success
    expect(actions[1].type).toEqual(fetchDetailsSuccess().type);
    expect(actions[1].payload.details.imdbID).toEqual(imdbID);
  });

  it('Should safely return error messages when imdbID is not provided', async () => {
    const store = mockStore();

    await store.dispatch(fetchDetailsThunk(undefined));
    const actions = await store.getActions();

    expect(actions[0]).toEqual(fetchDetails(undefined));

    expect(actions[1].type).toEqual(
      fetchDetailsFailed('imdbID is required').type,
    );
    expect(actions[1].payload.errorMessage).toEqual('imdbID is required');
  });
});
