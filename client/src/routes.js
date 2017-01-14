import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import store from './store';

// Layout
import AppLayout from './layouts/app/container';
import ProtectedLayout from './layouts/protected/container';
import RessourceLayout from './layouts/ressource/container';

// Public pages
import Home from './pages/home/container';
import Search from './pages/search/container';
import Films from './pages/films/container';
import Film from './pages/film/container';
import Series from './pages/series/container';
import Serie from './pages/serie/container';
import Login from './pages/login/container';
import Register from './pages/register/container';

// Private pages
import Profile from './pages/profile/container';

import AddFilm from './pages/add/film/container';
import AddSerie from './pages/add/serie/container';
import AddEpisode from './pages/add/episode/container';
import AddLink from './pages/add/link/container';

import UpdateFilm from './pages/update/film/container';
import UpdateSerie from './pages/update/serie/container';
import UpdateEpisode from './pages/update/episode/container';

import RemoveFilm from './pages/remove/film/container';
import RemoveSerie from './pages/remove/serie/container';
import RemoveEpisode from './pages/remove/episode/container';

import _404 from './pages/404/view';

const history = syncHistoryWithStore(browserHistory, store);

export default(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Home} />
        <Route path="search/:search" component={Search}/>
        <Route path="films" component={Films}/>
        <Route path="film/:id" component={Film} />
        <Route path="series" component={Series}/>
        <Route path="serie/:id" component={Serie} />
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route component={ProtectedLayout}>
          <Route path="profile" component={Profile}/>
          <Route path="add" component={RessourceLayout}>
            <Route path="film" component={AddFilm}/>
            <Route path="serie" component={AddSerie}/>
            <Route path="episode" component={AddEpisode}/>
            <Route path="link" component={AddLink}/>
          </Route>
          <Route path="update" component={RessourceLayout}>
            <Route path="film" component={UpdateFilm}/>
            <Route path="serie" component={UpdateSerie}/>
            <Route path="episode" component={UpdateEpisode}/>
          </Route>
          <Route path="remove" component={RessourceLayout}>
            <Route path="film" component={RemoveFilm}/>
            <Route path="serie" component={RemoveSerie}/>
            <Route path="episode" component={RemoveEpisode}/>
          </Route>
        </Route>
        <Route path="*" component={_404}/>
      </Route>
    </Router>
  </Provider>
);
