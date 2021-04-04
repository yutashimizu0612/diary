import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import authContext from '../views/contexts/AuthContext';

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const signup = () => {
    console.log('signup');
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
      }
      return response.data;
    });
  };
  const logout = () => {
    console.log('signup');
  };
  return {
    user,
    signup,
    login,
    logout,
  };
};

export default useProvideAuth;
