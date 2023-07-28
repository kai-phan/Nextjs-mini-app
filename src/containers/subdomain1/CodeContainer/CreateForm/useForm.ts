import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const defaultValues = {
  name: 'Name Nguyen',
};

export const useCreateForm = () => {
  return useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
      }),
    ),
    defaultValues,
  });
};
