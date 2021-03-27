import Cookies from 'js-cookie';
import { LoginResponseData } from '../../types';

export const authenticate = (data: LoginResponseData, next: any): void => {
  console.log('AUTHENTICATE LOGIN');
  console.log('data', data);
  Cookies.set('accessToken', data.accessToken, { expires: 1 });
  Cookies.set('id', data.user.id, { expires: 1 });
  next();
};

export const isLoggedIn = () => {
  const token = Cookies.get('accessToken');
  const id = Cookies.get('id');
  return token && id ? id : false;
};