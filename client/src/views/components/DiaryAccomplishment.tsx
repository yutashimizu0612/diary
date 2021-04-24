import React from 'react';
import styled from 'styled-components/macro';
import { Accomplishment, AccomplishmentFormValues } from '../../types';
import H2Heading from './H2Heading';
import AccomplishmentItem from './AccomplishmentItem';
import AccomplishmentForm from './AccomplishmentForm';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

type Props = {
  accomplishments: Accomplishment[];
  values: AccomplishmentFormValues;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onUpdate: (id: string, content: string, published: boolean) => void;
  onDelete: (id: string) => void;
};

const DiaryAccomplishment: React.FC<Props> = ({
  accomplishments,
  values,
  onChange,
  onSubmit,
  onUpdate,
  onDelete,
}) => {
  return (
    <>
      <H2Heading text="今日達成したこと" color="#2cd671" />
      <StyledWrapper>
        {accomplishments &&
          accomplishments.map((accomplishment) => (
            <AccomplishmentItem
              key={accomplishment.id}
              accomplishment={accomplishment}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
      </StyledWrapper>
      <AccomplishmentForm values={values} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default DiaryAccomplishment;
