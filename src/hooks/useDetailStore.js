import { useDispatch, useSelector } from 'react-redux';

import fetchDetailsThunk from '../thunks/fetchDetailsThunk';

function useDetailStore() {
  const state = useSelector((state) => state.details);
  const dispatch = useDispatch();

  return {
    state,
    actions: {
      fetchDetails: (imdbID) => dispatch(fetchDetailsThunk(imdbID)),
    },
  };
}

export default useDetailStore;
