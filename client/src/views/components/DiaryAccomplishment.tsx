import React from 'react';
import styled from 'styled-components/macro';
import H2Heading from './H2Heading';
import AccomplishmentItem from './AccomplishmentItem';
import AccomplishmentForm from '../components/AccomplishmentForm';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

const DiaryAccomplishment: React.FC = () => (
  <>
    <H2Heading text="今日達成したこと" color="#2cd671" />
    <StyledWrapper>
      <AccomplishmentItem text="5km走れた" />
      <AccomplishmentItem text="15km走れた" />
      <AccomplishmentItem text="25km走れた" />
    </StyledWrapper>
    <AccomplishmentForm />
  </>
);

export default DiaryAccomplishment;
