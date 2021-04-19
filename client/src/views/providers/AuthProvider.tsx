import React from 'react';
import authContext from '../contexts/AuthContext';
import useAuthProvider from '../../functions/auth/use-auth';

const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
