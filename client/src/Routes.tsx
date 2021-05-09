import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './views/components/auth/PrivateRoute';
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
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/activation/:token">
        <ActivateAccount />
      </Route>
      <PrivateRoute exact path="/">
        <Day />
      </PrivateRoute>
      <PrivateRoute path="/posts">
        <Posts />
      </PrivateRoute>
      <PrivateRoute path="/status">
        <Status />
      </PrivateRoute>
      <PrivateRoute path="/settings">
        <AccountSettings />
      </PrivateRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
