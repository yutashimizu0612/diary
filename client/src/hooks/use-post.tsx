import { useState, useCallback, useContext } from 'react';
import axios from 'axios';
import { Post } from '../types';
import PostContext from '../views/contexts/PostContext';
import { useAuth } from '../functions/auth/use-auth';

export const usePost = () => {
  return useContext(PostContext);
};

const useProvidePost = () => {
  const auth = useAuth();
  const token = auth.getAccessToken();
  const [isCreated, setIsCreated] = useState(false);

  const getPost = useCallback((date) => {
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/posts/${date}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // console.log('getPost SUCCESS', response);
      if (response.data) {
        setIsCreated(true);
        return response.data;
      } else {
        setIsCreated(false);
        return { id: '', comment: '', star: 0 };
      }
    });
  }, []);

  const createPost = useCallback((date: string, comment: string, star: number) => {
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/posts`,
      data: { date, comment, star },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log('NEW POST SUCCESS', response);
      return response.data.id;
    });
  }, []);

  const updatePost = useCallback((id: string, comment: string, star: number) => {
    return axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}/posts/${id}`,
      data: { comment, star },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log('UPDATE POST SUCCESS', response);
    });
  }, []);

  return {
    isCreated,
    getPost,
    createPost,
    updatePost,
  };
};

export default useProvidePost;
