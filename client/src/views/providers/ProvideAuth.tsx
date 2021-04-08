import React from 'react';
import authContext from '../contexts/AuthContext';
import useProvideAuth from '../../functions/auth/use-auth';

const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default ProvideAuth;
