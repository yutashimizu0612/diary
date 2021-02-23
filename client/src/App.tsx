import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './views/pages/Login';
import Singup from './views/pages/Singup';
import Posts from './views/pages/Posts';
import Status from './views/pages/Status';
import Day from './views/pages/Day';
import AccountSettings from './views/pages/AccountSettings';
import NotFound from './views/pages/NotFound';

const App: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Day />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Singup />
    </Route>
    <Route path="/posts">
      <Posts />
    </Route>
    <Route path="/status">
      <Status />
    </Route>
    <Route path="/settings">
      <AccountSettings />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default App;
