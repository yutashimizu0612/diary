import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Singup from './Singup';
import Posts from './Posts';
import Status from './Status';
import Day from './Day';
import NotFound from './NotFound';

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
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default App;
