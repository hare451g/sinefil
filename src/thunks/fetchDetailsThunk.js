import axios from 'axios';

import { API_KEY, TYPE, RESPONSE_TYPE, API_HOST } from '../constants/omdb';

import {
  fetchDetails,
  fetchDetailsFailed,
  fetchDetailsSuccess,
} from '../store/details/actions';

const fetchDetailsThunk = (imdbID) => async (dispatch) => {
  try {
    dispatch(fetchDetails(imdbID));
    // setup request
    const url = API_HOST;

    if (!imdbID) {
      throw new Error('imdbID is required');
    }

    const config = {
      params: {
        apikey: API_KEY,
        r: RESPONSE_TYPE,
        type: TYPE,
        i: imdbID,
        plot: 'full',
      },
    };

    const response = await axios.get(url, config);

    if (response.data) {
      if (response.data.Response === 'True') {
        // transform search results
        dispatch(fetchDetailsSuccess(response.data));
      } else if (response.data.Response === 'False') {
        throw new Error(response.data.Error);
      } else {
        throw new Error('unknown response error');
      }
    } else {
      throw new Error('cannot fetch data');
    }
  } catch (error) {
    const errorMessage = error.message || error;
    dispatch(fetchDetailsFailed(errorMessage));
  }
};

export default fetchDetailsThunk;
