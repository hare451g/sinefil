import {
  FETCH_DETAILS,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILED,
} from './constants';

const fetchDetails = (imdbID = '') => ({
  type: FETCH_DETAILS,
  payload: { imdbID },
});

const fetchDetailsFailed = (errorMessage = 'An unhandled error occurred') => ({
  type: FETCH_DETAILS_FAILED,
  payload: { errorMessage },
});

const fetchDetailsSuccess = (details = {}) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: { details },
});

export { fetchDetails, fetchDetailsFailed, fetchDetailsSuccess };
