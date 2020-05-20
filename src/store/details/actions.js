import {
  FETCH_DETAILS,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILED,
} from './constants';

const fetchDetails = (imdbID = '') => ({
  type: FETCH_DETAILS,
  payload: { imdbID },
});

export { fetchDetails };
