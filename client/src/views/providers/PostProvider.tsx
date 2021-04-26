import React from 'react';
import PostContext from '../contexts/PostContext';
import useProvidePost from '../../hooks/use-post';

const PostProvider: React.FC = ({ children }) => {
  const { isCreated, getPost, createPost, updatePost } = useProvidePost();
  return (
    <PostContext.Provider
      value={{
        isCreated,
        getPost,
        createPost,
        updatePost,
      }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
