import { useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import authContext from '../../views/contexts/AuthContext';

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const isLoggedIn = () => {
    return Cookies.get('accessToken') && Cookies.get('id');
  };

  const getAccessToken = () => {
    return Cookies.get('accessToken');
  };

  const getCurrentUserId = () => {
    return Cookies.get('id');
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
      }
    });
  };

  const logout = (next: any) => {
    console.log('logout');
    Cookies.remove('accessToken');
    Cookies.remove('id');
    next();
  };

  return {
    isLoggedIn,
    getAccessToken,
    getCurrentUserId,
    signup,
    login,
    logout,
  };
};

export default useProvideAuth;
