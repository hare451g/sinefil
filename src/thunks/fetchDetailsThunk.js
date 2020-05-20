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
        // normalize details data
        dispatch(
          fetchDetailsSuccess({
            title: response.data.Title,
            year: response.data.Year,
            rated: response.data.Rated,
            released: response.data.Released,
            runtime: response.data.Runtime,
            genre: response.data.Genre,
            director: response.data.Director,
            writer: response.data.Writer,
            actors: response.data.Actors,
            plot: response.data.Plot,
            language: response.data.Language,
            country: response.data.Country,
            awards: response.data.Awards,
            poster: response.data.Poster,
            ratings: response.data.Ratings,
            metascore: response.data.Metascore,
            imdbRating: response.data.imdbRating,
            imdbVotes: response.data.imdbVotes,
            imdbID: response.data.imdbID,
            type: response.data.Type,
            dvd: response.data.DVD,
            boxOffice: response.data.BoxOffice,
            production: response.data.Production,
            website: response.data.Website,
          }),
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
    dispatch(fetchDetailsFailed(errorMessage));
  }
};

export default fetchDetailsThunk;
