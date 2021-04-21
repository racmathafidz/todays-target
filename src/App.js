import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import landingPage from 'pages/landingPage'

import 'assets/css/styles.css';

function App() {
  return (
    <switch>
      <Route exact path="/" component={landingPage} />
    </switch>
  );
}

export default App;
