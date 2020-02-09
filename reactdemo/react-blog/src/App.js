import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [ state, setState ] = useState({
    lang: 'en'
  });

  const appState = {
    state,
    setState
  }

  return (
    <Switch>
      <Route exact path='/'>
        <HomePage {...appState} />
      </Route>

      <Route path='/contact'>
        <ContactPage {...appState} />
      </Route>
    </Switch>
  );
}

export default App;
