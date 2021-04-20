import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Layout from '../layouts/Layout';
import Contribution from '../components/Contribution';
import DiaryDate from '../components/DiaryDate';
import DiaryAccomplishment from '../components/DiaryAccomplishment';
import DiaryComment from '../components/DiaryComment';
import DiaryStar from '../components/DiaryStar';
import DiaryPagination from '../components/DiaryPagination';
import { useAccomplishment } from '../../hooks/use-accomplishments';

const StyledWrapper = styled.div`
  margin: 60px auto 0;
  width: 950px;
`;

// Postsの取得

// コントリビューションの取得

const Day: React.FC = () => {
  // Accomplishmentsの取得
  const { accomplishments, getAccomplishments } = useAccomplishment();
  useEffect(() => {
    getAccomplishments();
  }, []);
  return (
    <Layout>
      <Contribution />
      <StyledWrapper>
        <DiaryDate />
        <div css="margin-top: 45px;">
          <DiaryAccomplishment accomplishments={accomplishments} />
        </div>
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
        <div css="margin-top: 75px;">
          <DiaryPagination />
        </div>
      </StyledWrapper>
    </Layout>
  );
};

export default Day;
