import { useState, useCallback, useContext } from 'react';
import axios from 'axios';
import { Accomplishment } from '../types';
import accomplishmentContext from '../views/contexts/AccomplishmentContext';
import { useAuth } from '../functions/auth/use-auth';

export const useAccomplishment = () => {
  return useContext(accomplishmentContext);
};

const useProvideAccomplishment = () => {
  const auth = useAuth();
  const token = auth.getAccessToken();
  const [accomplishments, setAccomplishments] = useState<Accomplishment[]>([]);

  const getAccomplishments = useCallback(() => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/accomplishments`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log('getAccomplishments SUCCESS', response);
      setAccomplishments(response.data);
    });
  }, []);

  const addAccomplishment = useCallback((content: string, published: boolean) => {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/accomplishments`,
      data: { content, published },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log('NEW ACCOMPLISHMENT SUCCESS', response);
    });
  }, []);

  const deleteAccomplishment = useCallback((id: string) => {
    return axios({
      method: 'DELETE',
      url: `${process.env.REACT_APP_API_URL}/accomplishments/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log('DELETE ACCOMPLISHMENT SUCCESS', response);
    });
  }, []);

  return {
    accomplishments,
    setAccomplishments,
    getAccomplishments,
    addAccomplishment,
    deleteAccomplishment,
  };
};

export default useProvideAccomplishment;
