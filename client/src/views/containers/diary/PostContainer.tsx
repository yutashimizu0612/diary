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
  date: moment.Moment | null;
};

const PostContainer: React.FC<Props> = ({ date }) => {
  const [success, setSuccess] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const { isCreated, getPost, createPost, updatePost } = usePost();
  const [values, setValues] = useState<Post>({ id: '', comment: '', star: 0 });
  useEffect(() => {
    (async () => {
      const post: Post = await getPost(date!.format('YYYY-MM-DD'));
      setValues(post);
    })();
  }, [date]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCanSubmit(true);
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log('values', values);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (canSubmit) {
      console.log('handleSubmit');
      setSuccess(false);
      isCreated ? await update() : await create();
      setSuccess(true);
    }
  };

  const create = async (): Promise<void> => {
    try {
      const id = await createPost(date!.format('YYYY-MM-DD'), values.comment, values.star);
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

  const initializeSuccess = (): void => {
    setSuccess(false);
  };

  return (
    <>
      <StyledComment>
        <DiaryComment
          success={success}
          canSubmit={canSubmit}
          comment={values.comment}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClickAway={initializeSuccess}
        />
      </StyledComment>
      <StyledStar>
        <DiaryStar />
      </StyledStar>
    </>
  );
};

export default PostContainer;
