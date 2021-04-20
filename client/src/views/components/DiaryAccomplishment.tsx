import React from 'react';
import styled from 'styled-components/macro';
import { Accomplishment } from '../../types';
import H2Heading from './H2Heading';
import AccomplishmentItem from './AccomplishmentItem';
import AccomplishmentForm from '../components/AccomplishmentForm';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

type Props = {
  accomplishments: Accomplishment[];
};

const DiaryAccomplishment: React.FC<Props> = ({ accomplishments }) => {
  console.log('accomplishments in DiaryAccomplishment', accomplishments);
  return (
    <>
      <H2Heading text="今日達成したこと" color="#2cd671" />
      <StyledWrapper>
        {accomplishments &&
          accomplishments.map((accomplishment) => (
            <AccomplishmentItem
              id={accomplishment.id}
              text={accomplishment.content}
              published={accomplishment.published}
            />
          ))}
      </StyledWrapper>
      <AccomplishmentForm />
    </>
  );
};

export default DiaryAccomplishment;
