import React from 'react';
import styled from 'styled-components/macro';
import Skeleton from '@material-ui/lab/Skeleton';
import Contribution from '../../components/Contribution';
import useContributionCounts from '../../../hooks/use-contribution-counts';

const StyledWrapper = styled.div`
  background: #fff;
  padding: 36px 0;
`;

const StyledSkeleton = styled.div`
  width: 952px;
  margin: 0 auto;
`;

const StyledSkeletonText = styled(Skeleton)`
  background: #ebe9e9;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const StyledSkeletonRect = styled(Skeleton)`
  background: #ebe9e9;
  border-radius: 4px;
`;

const StyledLoading = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const ContributionContainer: React.FC = () => {
  const { counts, isLoaded } = useContributionCounts();
  return (
    <StyledWrapper>
      {isLoaded ? (
        <Contribution counts={counts} />
      ) : (
        <StyledSkeleton>
          <StyledSkeletonText variant="text" width={222} />
          <div css="position: relative;">
            <StyledSkeletonRect variant="rect" width={952} height={124} />
            <StyledLoading>loading...</StyledLoading>
          </div>
        </StyledSkeleton>
      )}
    </StyledWrapper>
  );
};

export default ContributionContainer;
