import React from 'react';
import AccomplishmentContext from '../contexts/AccomplishmentContext';
import useProvideAccomplishment from '../../hooks/use-accomplishments';

const AccomplishmentProvider: React.FC = ({ children }) => {
  const {
    accomplishments,
    setAccomplishments,
    getAccomplishments,
    createAccomplishment,
    updateAccomplishment,
    deleteAccomplishment,
    getAccomplishmentsCounts,
    getProductiveDays,
  } = useProvideAccomplishment();
  return (
    <AccomplishmentContext.Provider
      value={{
        accomplishments,
        setAccomplishments,
        getAccomplishments,
        createAccomplishment,
        updateAccomplishment,
        deleteAccomplishment,
        getAccomplishmentsCounts,
        getProductiveDays,
      }}>
      {children}
    </AccomplishmentContext.Provider>
  );
};

export default AccomplishmentProvider;
