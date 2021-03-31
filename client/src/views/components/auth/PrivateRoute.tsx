import React, { ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLoggedIn } from '../../../functions/auth/authenticate';

type Props = { children: ReactNode } & RouteProps;

const PrivateRoute = ({ children, ...rest }: Props) => (
  <Route
    {...rest}
    render={({ location }) =>
      isLoggedIn() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
