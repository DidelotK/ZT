import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';

render(
  <MuiThemeProvider>
    {routes}
  </MuiThemeProvider>,
  document.getElementById('root')
);
