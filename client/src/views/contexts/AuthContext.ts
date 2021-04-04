import { createContext } from 'react';

// TODO contextのdefault値
const user = null;
const signup = () => {
  console.log('signup');
};
const login = (email: string, password: string): any => {
  console.log('login');
};
const logout = () => {
  console.log('logout');
};
const AuthContext = createContext({ user, signup, login, logout });

export default AuthContext;
