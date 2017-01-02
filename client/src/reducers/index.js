import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import user from './user';
import films from './films';
import series from './series';

const app = combineReducers({
  user,
  films,
  series,
  form: formReducer,
  routing: routerReducer
});

export default app;