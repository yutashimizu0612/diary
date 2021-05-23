import { createContext } from 'react';
import { Accomplishment } from '../../types';

// TODO contextのdefault値
const accomplishments: Accomplishment[] = [];

const setAccomplishments = (accomplishments: Accomplishment[]): any => {
  return accomplishments;
};

const getAccomplishments = (date: string | string[]): any => {
  return accomplishments;
};

const createAccomplishment = (date: string, content: string, published: boolean): any => {
  return accomplishments;
};

const updateAccomplishment = (id: string, content: string, published: boolean): any => {
  return accomplishments;
};

const deleteAccomplishment = (id: string): any => {
  return accomplishments;
};

const getAccomplishmentsCounts = (from: string, to: string): any => {
  return accomplishments;
};

const getProductiveDates = (from: string, to: string, order: string, limit: number): any => {
  return accomplishments;
};

const AccomplishmentContext = createContext({
  accomplishments,
  setAccomplishments,
  getAccomplishments,
  createAccomplishment,
  updateAccomplishment,
  deleteAccomplishment,
  getAccomplishmentsCounts,
  getProductiveDates,
});

export default AccomplishmentContext;
