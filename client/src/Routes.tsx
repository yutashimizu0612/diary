import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/pages/Login';
import SignUp from './views/pages/SignUp';
import ActivateAccount from './views/pages/ActivateAccount';
import Posts from './views/pages/Posts';
import Status from './views/pages/Status';
import Day from './views/pages/Day';
import AccountSettings from './views/pages/AccountSettings';
import NotFound from './views/pages/NotFound';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Day />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/activation/:token">
        <ActivateAccount />
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
  </BrowserRouter>
);

export default Routes;
