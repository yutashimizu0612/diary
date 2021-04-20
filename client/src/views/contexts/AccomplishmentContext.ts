import { createContext } from 'react';
import { Accomplishment } from '../../types';

// TODO contextのdefault値
const accomplishments: Accomplishment[] = [];

const getAccomplishments = (): any => {
  return accomplishments;
};

const AccomplishmentContext = createContext({
  accomplishments,
  getAccomplishments,
});

export default AccomplishmentContext;
