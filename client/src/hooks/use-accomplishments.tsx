import { useState, useCallback, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Accomplishment } from '../types';
import accomplishmentContext from '../views/contexts/AccomplishmentContext';

export const useAccomplishment = () => {
  return useContext(accomplishmentContext);
};

const useProvideAccomplishment = () => {
  const [accomplishments, setState] = useState<Accomplishment[]>([]);

  const setAccomplishments = (accomplishments: Accomplishment[]) => setState(accomplishments);

  const getAccomplishments = useCallback((date: string | string[]) => {
    const querystring = Array.isArray(date) ? '?date=' + date.join('&date=') : `?date=${date}`;
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/accomplishments/${querystring}`,
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      console.log('getAccomplishments SUCCESS', response);
      return response.data;
    });
  }, []);

  const createAccomplishment = useCallback((date: string, content: string, published: boolean) => {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/accomplishments`,
      data: { date, content, published },
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      return response.data;
    });
  }, []);

  const updateAccomplishment = useCallback((id: string, content: string, published: boolean) => {
    return axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}/accomplishments/${id}`,
      data: { content, published },
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      console.log('UPDATE ACCOMPLISHMENT SUCCESS', response);
    });
  }, []);

  const deleteAccomplishment = useCallback((id: string) => {
    return axios({
      method: 'DELETE',
      url: `${process.env.REACT_APP_API_URL}/accomplishments/${id}`,
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      console.log('DELETE ACCOMPLISHMENT SUCCESS', response);
    });
  }, []);

  const getAccomplishmentsCounts = useCallback((from: string, to: string) => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/accomplishments/counts?from=${from}&to=${to}`,
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      console.log('GET ACCOMPLISHMENTS COUNTS SUCCESS', response);
      return response.data;
    });
  }, []);

  const getProductiveDates = useCallback(
    (from: string, to: string, order: string, limit: number) => {
      return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/accomplishments/counts/?from=${from}&to=${to}&order=${order}&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
        },
      }).then((response) => {
        console.log('GET PRODUCTIVE DATES SUCCESS', response);
        return response.data;
      });
    },
    [],
  );

  return {
    accomplishments,
    setAccomplishments,
    getAccomplishments,
    createAccomplishment,
    updateAccomplishment,
    deleteAccomplishment,
    getAccomplishmentsCounts,
    getProductiveDates,
  };
};

export default useProvideAccomplishment;
