import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import authContext from '../views/contexts/AuthContext';

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    auth: false,
    isLoggedIn: false,
  });

  const getAccessToken = () => {
    return Cookies.get('accessToken');
  };

  const signup = (name: string, email: string, password: string, confirmation: string) => {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/signup`,
      data: { name, email, password, confirmation },
    });
  };

  const login = (email: string, password: string) => {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/login`,
      data: { email, password },
    }).then((response) => {
      if (response.data.accessToken) {
        console.log('LOGIN SUBMIT SUCCESS', response);
        const { id, name, auth } = response.data.user;
        Cookies.set('accessToken', response.data.accessToken, { expires: 1 });
        setUser({ id, name, auth, isLoggedIn: true });
      }
      return response.data;
    });
  };

  const logout = () => {
    Cookies.remove('accessToken');
    setUser({
      id: '',
      name: '',
      auth: false,
      isLoggedIn: false,
    });
  };

  return {
    user,
    getAccessToken,
    signup,
    login,
    logout,
  };
};

export default useProvideAuth;
