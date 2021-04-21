import React from 'react';
import AccomplishmentContext from '../contexts/AccomplishmentContext';
import useProvideAccomplishment from '../../hooks/use-accomplishments';

const AccomplishmentProvider: React.FC = ({ children }) => {
  const {
    accomplishments,
    setAccomplishments,
    getAccomplishments,
    addAccomplishment,
    deleteAccomplishment,
  } = useProvideAccomplishment();
  return (
    <AccomplishmentContext.Provider
      value={{
        accomplishments,
        setAccomplishments,
        getAccomplishments,
        addAccomplishment,
        deleteAccomplishment,
      }}>
      {children}
    </AccomplishmentContext.Provider>
  );
};

export default AccomplishmentProvider;
