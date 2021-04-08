import React from 'react';
import H2Heading from './H2Heading';
import AccomplishmentItem from './AccomplishmentItem';
import AccomplishmentForm from '../components/AccomplishmentForm';

const DiaryAccomplishment: React.FC = () => (
  <>
    <H2Heading text="今日達成したこと" color="#2cd671" />
    <div css="margin: 16px 0;">
      <AccomplishmentItem text="5km走れた" />
      <AccomplishmentItem text="15km走れた" />
      <AccomplishmentItem text="25km走れた" />
    </div>
    <AccomplishmentForm />
  </>
);

export default DiaryAccomplishment;
