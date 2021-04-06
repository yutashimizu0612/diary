import { createContext } from 'react';
import Cookies from 'js-cookie';

// TODO contextのdefault値
const isLoggedIn = () => {
  return Cookies.get('accessToken');
};
const getAccessToken = () => {
  return Cookies.get('accessToken');
};
const getCurrentUserId = () => {
  return Cookies.get('accessToken');
};
const signup = (name: string, email: string, password: string, confirmation: string): any => {
  console.log('signup');
};
const login = (email: string, password: string): any => {
  console.log('login');
};
const logout = (next: any) => {
  console.log('logout');
  next();
};
const AuthContext = createContext({
  isLoggedIn,
  getAccessToken,
  getCurrentUserId,
  signup,
  login,
  logout,
});

export default AuthContext;
