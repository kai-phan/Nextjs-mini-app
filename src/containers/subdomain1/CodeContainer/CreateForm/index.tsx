import React from 'react';

import { useCreateForm } from './useForm';

export type Props = {
  className?: string;
};

const CreateForm: React.FC<Props> = () => {
  const { handleSubmit, register } = useCreateForm();

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <div>Create Form Component</div>
      <input type="text" id="" {...register('name')} />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default CreateForm;
