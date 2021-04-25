import React from 'react';
import PostContext from '../contexts/PostContext';
import useProvidePost from '../../hooks/use-post';

const PostProvider: React.FC = ({ children }) => {
  const { post, getPost, createPost, updatePost } = useProvidePost();
  return (
    <PostContext.Provider
      value={{
        post,
        getPost,
        createPost,
        updatePost,
      }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
