import { createContext } from 'react';
import { Post } from '../../types';

// TODO contextのdefault値
const post: Post = { id: '', comment: '', star: 0 };

const isCreated = false;

const getPost = (date: string): any => {
  return post;
};

const createPost = (date: string, comment: string, star: number): any => {
  return post;
};

const updatePost = (id: string, comment: string, star: number): any => {
  return post;
};

const PostContext = createContext({
  isCreated,
  getPost,
  createPost,
  updatePost,
});

export default PostContext;
