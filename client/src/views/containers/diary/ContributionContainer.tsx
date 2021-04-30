import React, { useState, useEffect } from 'react';
import { Count } from '../../../types';
import Contribution from '../../components/Contribution';
import { useAccomplishment } from '../../../hooks/use-accomplishments';

const ContributionContainer: React.FC = () => {
  const [counts, setCounts] = useState<Count[]>([]);
  const { getAccomplishmentsCounts } = useAccomplishment();
  useEffect(() => {
    (async () => {
      const counts = await getAccomplishmentsCounts('2021-04-21', '2021-04-29');
      setCounts(counts);
    })();
  }, []);

  return <Contribution counts={counts} />;
};

export default ContributionContainer;
