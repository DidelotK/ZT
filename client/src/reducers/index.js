import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import user from './user';
import film from './film';
import films from './films';
import serie from './serie';
import series from './series';

const app = combineReducers({
  user,
  film,
  films,
  serie,
  series,
  form: formReducer,
  routing: routerReducer
});

export default app;