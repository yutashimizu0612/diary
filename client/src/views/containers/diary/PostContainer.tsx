import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Post } from '../../../types';
import DiaryComment from '../../components/DiaryComment';
import DiaryStar from '../../components/DiaryStar';
import { usePost } from '../../../hooks/use-post';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

type Props = {
  date: string;
};

const PostContainer: React.FC<Props> = ({ date }) => {
  const { post, getPost, createPost, updatePost } = usePost();
  const [isCreated, setIsCreated] = useState(false);
  const [values, setValues] = useState<Post>({
    id: post.id,
    comment: post.comment,
    star: post.star,
  });
  useEffect(() => {
    getPost(date);
  }, [date]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log('values', values);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    console.log('handleSubmit');
    isCreated ? update() : create();
  };

  const create = async (): Promise<void> => {
    try {
      const id = await createPost(values.comment, values.star);
      setValues({ id, comment: values.comment, star: values.star });
    } catch (error) {
      console.log('error', error);
    }
  };

  const update = async (): Promise<void> => {
    try {
      await updatePost(values.id, values.comment, values.star);
      setValues({ ...values, comment: values.comment, star: values.star });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div css="margin-top: 60px;">
        <DiaryComment comment={values.comment} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
      <div
        css={`
          margin-top: 60px;
          text-align: right;
        `}>
        <DiaryStar />
      </div>
    </>
  );
};

export default PostContainer;
