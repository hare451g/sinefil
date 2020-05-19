import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composeEnhancer = composeWithDevTools({
  name: 'Sinefil',
});

const store = createStore(rootReducer, composeEnhancer());

export default store;
