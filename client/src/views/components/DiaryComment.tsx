import React from 'react';
import H2Heading from './H2Heading';
import DiaryCommentForm from './DiaryCommentForm';

const DiaryComment: React.FC = () => (
  <>
    <H2Heading text="コメント" color="#f8548c" />
    <div css="margin: 16px 0;">
      <DiaryCommentForm />
    </div>
  </>
);

export default DiaryComment;
