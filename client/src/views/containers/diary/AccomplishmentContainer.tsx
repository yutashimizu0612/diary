import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Accomplishment, AccomplishmentFormValues } from '../../../types';
import H2Heading from '../../components/H2Heading';
import AccomplishmentItem from '../../components/AccomplishmentItem';
import AccomplishmentForm from '../../components/AccomplishmentForm';
import { useAccomplishment } from '../../../hooks/use-accomplishments';

const StyledWrapper = styled.div`
  margin: 16px 0;
`;

type Props = {
  date: moment.Moment | null;
};

const AccomplishmentContainer: React.FC<Props> = ({ date }) => {
  const [values, setValues] = useState<AccomplishmentFormValues>({
    content: '',
    published: false,
  });
  const {
    accomplishments,
    setAccomplishments,
    getAccomplishments,
    createAccomplishment,
    updateAccomplishment,
    deleteAccomplishment,
  } = useAccomplishment();
  useEffect(() => {
    (async () => {
      const accomplishments: Accomplishment[] = await getAccomplishments(
        date!.format('YYYY-MM-DD'),
      );
      setAccomplishments(accomplishments);
    })();
  }, [date]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    try {
      const accomplishment: Accomplishment = await createAccomplishment(
        date!.format('YYYY-MM-DD'),
        values.content,
        values.published,
      );
      setAccomplishments([
        ...accomplishments,
        {
          id: accomplishment.id,
          date: accomplishment.date,
          content: accomplishment.content,
          published: accomplishment.published,
        },
      ]);
      setValues({ content: '', published: false });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdate = async (id: string, content: string, published: boolean): Promise<void> => {
    try {
      await updateAccomplishment(id, content, published);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteAccomplishment(id);
      setAccomplishments(accomplishments.filter((accomplishment) => accomplishment.id !== id));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <H2Heading text="今日達成したこと" color="#2cd671" />
      <StyledWrapper>
        {accomplishments &&
          accomplishments.map((accomplishment) => (
            <AccomplishmentItem
              key={accomplishment.id}
              accomplishment={accomplishment}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
      </StyledWrapper>
      <AccomplishmentForm values={values} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
};

export default AccomplishmentContainer;
