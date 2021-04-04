import React, { useState, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import authContext from '../views/contexts/AuthContext';

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const hasAccessToken = () => {
    const token = Cookies.get('accessToken');
    const id = Cookies.get('id');
    return token && id ? id : false;
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
        Cookies.set('accessToken', response.data.accessToken, { expires: 1 });
        Cookies.set('id', response.data.user.id, { expires: 1 });
        setUser(response.data);
      }
      return response.data;
    });
  };

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('id');
    setUser(null);
  };

  return {
    user,
    hasAccessToken,
    signup,
    login,
    logout,
  };
};

export default useProvideAuth;
