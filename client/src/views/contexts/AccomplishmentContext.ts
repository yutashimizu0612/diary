import { createContext } from 'react';
import { Accomplishment } from '../../types';

// TODO contextのdefault値
const accomplishments: Accomplishment[] = [];

const addAccomplishment = (newAccomplishment: Accomplishment): any => {
  return accomplishments;
};

const removeAccomplishment = (id: string): any => {
  return accomplishments;
};

const getAccomplishments = (date: string): any => {
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

const AccomplishmentContext = createContext({
  accomplishments,
  addAccomplishment,
  removeAccomplishment,
  getAccomplishments,
  createAccomplishment,
  updateAccomplishment,
  deleteAccomplishment,
  getAccomplishmentsCounts,
});

export default AccomplishmentContext;
