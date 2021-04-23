import React, { useState, useEffect } from 'react';
import { AccomplishmentFormValues } from '../../../types';
import DiaryAccomplishment from '../../components/DiaryAccomplishment';
import { useAccomplishment } from '../../../hooks/use-accomplishments';

const Accomplishment: React.FC = () => {
  const [values, setValues] = useState<AccomplishmentFormValues>({
    content: '',
    published: false,
  });
  // Accomplishmentsの取得
  const {
    accomplishments,
    getAccomplishments,
    addAccomplishment,
    updateAccomplishment,
    deleteAccomplishment,
  } = useAccomplishment();
  // TODO 依存配列にdateを入れて、date変更時のみAPI通信
  useEffect(() => {
    getAccomplishments();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log('values', values);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    console.log('handleSubmit');
    try {
      await addAccomplishment(values.content, values.published);
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
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <DiaryAccomplishment
      accomplishments={accomplishments}
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
};

export default Accomplishment;
