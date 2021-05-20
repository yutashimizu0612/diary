import React from 'react';
import Contribution from '../../components/Contribution';
import useContributionCounts from '../../../hooks/use-contribution-counts';

const ContributionContainer: React.FC = () => {
  const { counts } = useContributionCounts();
  return <Contribution counts={counts} />;
};

export default ContributionContainer;
