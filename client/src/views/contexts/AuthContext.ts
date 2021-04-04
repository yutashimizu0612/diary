import { createContext } from 'react';
import Cookies from 'js-cookie';

// TODO contextのdefault値
const user = {
  id: '',
  name: '',
  auth: false,
  isLoggedIn: false,
};
const getAccessToken = () => {
  return Cookies.get('accessToken');
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
const AuthContext = createContext({ user, getAccessToken, signup, login, logout });

export default AuthContext;
