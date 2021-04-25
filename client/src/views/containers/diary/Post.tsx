import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Post } from '../../../types';
import DiaryComment from '../../components/DiaryComment';
import DiaryStar from '../../components/DiaryStar';
import { usePost } from '../../../hooks/use-posts';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

type Props = {
  date: string;
};

const Post: React.FC<Props> = ({ date }) => {
  const [values, setValues] = useState<Post>({
    id: '',
    comment: '',
    star: 0,
  });
  const { post, getPost, createPost, updatePost } = usePost();
  useEffect(() => {
    getPost(date);
  }, [date]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log('values', values);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    console.log('handleSubmit');
    try {
      const id = await createPost(values.comment, values.star);
      // addAccomplishment({
      //   id,
      //   content: values.content,
      //   published: values.published,
      // });
      setValues({ id: '', comment: '', star: 0 });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdate = async (id: string, comment: string, star: number): Promise<void> => {
    try {
      await updatePost(id, comment, star);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <div css="margin-top: 60px;">
        <DiaryComment />
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

export default Post;
