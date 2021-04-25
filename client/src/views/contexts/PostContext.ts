import { createContext } from 'react';
import { Post } from '../../types';

// TODO contextのdefault値
const post: Post = { id: '', comment: '', star: 0 };

const getPost = (date: string): any => {
  return post;
};

const createPost = (comment: string, star: number): any => {
  return post;
};

const updatePost = (id: string, comment: string, star: number): any => {
  return post;
};

const PostContext = createContext({
  post,
  getPost,
  createPost,
  updatePost,
});

export default PostContext;
