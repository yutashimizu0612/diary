import { createContext } from 'react';

// TODO contextのdefault値
const user = null;
const hasAccessToken = () => {
  console.log('hasAccessToken');
};
const signup = (name: string, email: string, password: string, confirmation: string): any => {
  console.log('signup');
};
const login = (email: string, password: string): any => {
  console.log('login');
};
const logout = () => {
  console.log('logout');
};
const AuthContext = createContext({ user, hasAccessToken, signup, login, logout });

export default AuthContext;
