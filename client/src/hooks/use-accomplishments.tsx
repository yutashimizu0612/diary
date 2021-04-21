import { useState, useCallback, useContext } from 'react';
import axios from 'axios';
import accomplishmentContext from '../views/contexts/AccomplishmentContext';
import { useAuth } from '../functions/auth/use-auth';

export const useAccomplishment = () => {
  return useContext(accomplishmentContext);
};

const useProvideAccomplishment = () => {
  const auth = useAuth();
  const token = auth.getAccessToken();
  const [accomplishments, setAccomplishments] = useState([]);

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

  return {
    accomplishments,
    getAccomplishments,
    addAccomplishment,
  };
};

export default useProvideAccomplishment;
