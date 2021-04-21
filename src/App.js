import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import landingPage from 'pages/landingPage'
import appPage from 'pages/appPage'

import 'assets/css/styles.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={landingPage} />
      <Route exact path="/app" component={appPage} />
    </Switch>
  );
}

export default App;
