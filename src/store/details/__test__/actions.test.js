import { fetchDetails } from '../actions';

import { FETCH_DETAILS } from '../constants';

describe('Fetch details actions', () => {
  describe('fetch details start', () => {
    const imdbID = 'tt0457939';

    it('should have FETCH_DETAILS action type', () => {
      const dispatchedAction = fetchDetails();
      expect(dispatchedAction.type).toEqual(FETCH_DETAILS);
    });

    it('should contain imdbID as a payload', () => {
      const dispatchedAction = fetchDetails(imdbID);
      expect(dispatchedAction.payload).toEqual({ imdbID });
    });
  });
});
