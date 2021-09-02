/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import landingPage from 'pages/landingPage';
import appPage from 'pages/appPage';
import notFoundPage from 'pages/notFoundPage';

import 'assets/css/styles.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={landingPage} />
      <Route exact path="/app" component={appPage} />
      <Route path="" component={notFoundPage} />
    </Switch>
  );
}

export default App;
