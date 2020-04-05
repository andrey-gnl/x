import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {themeSettings} from './components/constants';
import Header from './components/Header';
import Countries from './components/Countries';

const theme = createMuiTheme(themeSettings);

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header theme={theme} />
        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
        </Switch>
      </ThemeProvider>

    </Router>
  );
}

export default App;
