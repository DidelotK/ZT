import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import store from './store';

// Layout
import AppLayout from './layouts/app/container';
import ProtectedLayout from './layouts/protected/container';

// Public pages
import Home from './pages/home/container';
import Films from './pages/films/container';
import Film from './pages/film/container';
import Series from './pages/series/container';
import Login from './pages/login/container';

// Private pages
import Profile from './pages/profile/container';
import Ajout from './pages/ajout/container';

import _404 from './pages/404/view';

const history = syncHistoryWithStore(browserHistory, store);

export default(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Home} />
        <Route path="films" component={Films}/>
        <Route path="film/:id" component={Film} />
        <Route path="series" component={Series}/>
        <Route path="login" component={Login}/>
        <Route component={ProtectedLayout}>
          <Route path="profile" component={Profile}/>
          <Route path="ajout" component={Ajout}/>
        </Route>
        <Route path="*" component={_404}/>
      </Route>
    </Router>
  </Provider>
);
