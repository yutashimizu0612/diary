import { createContext } from 'react';
import { Accomplishment } from '../../types';

// TODO contextのdefault値
const accomplishments: Accomplishment[] = [];

const setAccomplishments = (): Accomplishment[] => {
  return accomplishments;
};

const getAccomplishments = (): any => {
  return accomplishments;
};

const addAccomplishment = (content: string, published: boolean): any => {
  return accomplishments;
};

const deleteAccomplishment = (id: string): any => {
  return accomplishments;
};

const AccomplishmentContext = createContext({
  accomplishments,
  setAccomplishments,
  getAccomplishments,
  addAccomplishment,
  deleteAccomplishment,
});

export default AccomplishmentContext;
