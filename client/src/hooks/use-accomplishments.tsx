import { useState, useCallback, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Accomplishment } from '../types';
import accomplishmentContext from '../views/contexts/AccomplishmentContext';

export const useAccomplishment = () => {
  return useContext(accomplishmentContext);
};

const useProvideAccomplishment = () => {
  const [accomplishments, setAccomplishments] = useState<Accomplishment[]>([]);

  const addAccomplishment = (newAccomplishment: Accomplishment) =>
    setAccomplishments([...accomplishments, newAccomplishment]);

  const removeAccomplishment = (id: string) =>
    setAccomplishments(accomplishments.filter((accomplishment) => accomplishment.id !== id));

  const getAccomplishments = useCallback((date: string) => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/accomplishments/${date}`,
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      console.log('getAccomplishments SUCCESS', response);
      setAccomplishments(response.data);
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
      console.log('NEW ACCOMPLISHMENT SUCCESS', response);
      return response.data.id;
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
      url: `${process.env.REACT_APP_API_URL}/accomplishments/counts?from=${from}&?to=${to}`,
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
      },
    }).then((response) => {
      console.log('GET ACCOMPLISHMENTS COUNTS SUCCESS', response);
      return response.data;
    });
  }, []);

  return {
    accomplishments,
    addAccomplishment,
    removeAccomplishment,
    getAccomplishments,
    createAccomplishment,
    updateAccomplishment,
    deleteAccomplishment,
    getAccomplishmentsCounts,
  };
};

export default useProvideAccomplishment;
