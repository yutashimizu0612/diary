import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Post } from '../../../types';
import DiaryComment from '../../components/DiaryComment';
import DiaryStar from '../../components/DiaryStar';
import { usePost } from '../../../hooks/use-post';

const StyledComment = styled.div`
  margin-top: 60px;
`;

const StyledStar = styled.div`
  margin-top: 60px;
  text-align: right;
`;

type Props = {
  date: string;
};

const PostContainer: React.FC<Props> = ({ date }) => {
  const { isCreated, getPost, createPost, updatePost } = usePost();
  const [values, setValues] = useState<Post>({ id: '', comment: '', star: 0 });
  useEffect(() => {
    (async () => {
      const post: Post = await getPost(date);
      setValues(post);
    })();
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
      const id = await createPost(date, values.comment, values.star);
      setValues({ ...values, id, comment: values.comment, star: values.star });
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
      <StyledComment>
        <DiaryComment comment={values.comment} onChange={handleChange} onSubmit={handleSubmit} />
      </StyledComment>
      <StyledStar>
        <DiaryStar />
      </StyledStar>
    </>
  );
};

export default PostContainer;
