import React from 'react';
import AccomplishmentContext from '../contexts/AccomplishmentContext';
import useProvideAccomplishment from '../../hooks/use-accomplishments';

const AccomplishmentProvider: React.FC = ({ children }) => {
  const {
    accomplishments,
    setAccomplishments,
    addAccomplishment,
    removeAccomplishment,
    getAccomplishments,
    createAccomplishment,
    updateAccomplishment,
    deleteAccomplishment,
    getAccomplishmentsCounts,
  } = useProvideAccomplishment();
  return (
    <AccomplishmentContext.Provider
      value={{
        accomplishments,
        setAccomplishments,
        addAccomplishment,
        removeAccomplishment,
        getAccomplishments,
        createAccomplishment,
        updateAccomplishment,
        deleteAccomplishment,
        getAccomplishmentsCounts,
      }}>
      {children}
    </AccomplishmentContext.Provider>
  );
};

export default AccomplishmentProvider;
