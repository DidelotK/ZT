import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import user from './user';
import films from './films';
import series from './series';
import episodes from './episodes';

const app = combineReducers({
  user,
  films,
  series,
  episodes,
  form: formReducer,
  routing: routerReducer
});

export default app;
