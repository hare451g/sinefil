import axios from 'axios';
import {
  PER_PAGE,
  API_KEY,
  TYPE,
  RESPONSE_TYPE,
  API_HOST,
} from '../constants/omdb';

import {
  fetchMovies,
  fetchMovieSuccess,
  fetchMoviesFailed,
} from '../store/movies/actions';

import transformSearchResult from '../utils/transformSearchResult';
import transformPagination from '../utils/transformPagination';

const fetchMoviesThunk = (keyword, page) => async (dispatch) => {
  try {
    dispatch(fetchMovies(keyword, page));
    // setup request
    const url = API_HOST;

    if (!keyword) {
      throw new Error('Keyword is required');
    }

    const config = {
      params: {
        apikey: API_KEY,
        s: `*${keyword}*`,
        r: RESPONSE_TYPE,
        type: TYPE,
        page,
      },
    };

    const response = await axios.get(url, config);

    if (response.data) {
      if (response.data.Response === 'True') {
        // transform search results
        const searchResult = response.data.Search.map(transformSearchResult);

        // handle pagination
        const pagination = transformPagination(
          parseInt(response.data.totalResults),
          PER_PAGE,
          page,
        );

        // dispatch success action
        dispatch(
          fetchMovieSuccess(
            searchResult,
            pagination.totalResults,
            pagination.nextPage,
            pagination.totalPage,
          ),
        );
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
    dispatch(fetchMoviesFailed(errorMessage));
  }
};

export default fetchMoviesThunk;
