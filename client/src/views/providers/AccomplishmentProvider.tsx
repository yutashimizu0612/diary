import React from 'react';
import AccomplishmentContext from '../contexts/AccomplishmentContext';
import useProvideAccomplishment from '../../hooks/use-accomplishments';

const AccomplishmentProvider: React.FC = ({ children }) => {
  const {
    accomplishments,
    getAccomplishments,
    addAccomplishment,
    deleteAccomplishment,
  } = useProvideAccomplishment();
  return (
    <AccomplishmentContext.Provider
      value={{ accomplishments, getAccomplishments, addAccomplishment, deleteAccomplishment }}>
      {children}
    </AccomplishmentContext.Provider>
  );
};

export default AccomplishmentProvider;
