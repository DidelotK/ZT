import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';

// In order to use material design component
injectTapEventPlugin();

render(
  <MuiThemeProvider>
    {routes}
  </MuiThemeProvider>,
  document.getElementById('root')
);
