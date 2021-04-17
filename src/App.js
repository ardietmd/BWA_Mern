import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
         <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
