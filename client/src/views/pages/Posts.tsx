import React from 'react';
import styled from 'styled-components/macro';
import Layout from '../layouts/Layout';
import Post from '../components/Post';

const StyledWrapper = styled.div`
  margin: 130px auto 0;
  width: 680px;
`;

const Posts: React.FC = () => (
  <Layout>
    <StyledWrapper>
      <ul>
        <li css="margin-bottom: 20px;">
          <Post />
        </li>
        <li css="margin-bottom: 20px;">
          <Post />
        </li>
        <li css="margin-bottom: 20px;">
          <Post />
        </li>
      </ul>
    </StyledWrapper>
  </Layout>
);

export default Posts;
