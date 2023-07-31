import React from 'react';

import { useTodos } from 'src/queries/todo';

export type Props = {
  className?: string;
};

const TodosClient: React.FC<Props> = () => {
  const { data } = useTodos({
    variables: {
      _limit: 10,
    },
  });

  return <React.Fragment>{JSON.stringify(data)}</React.Fragment>;
};

export default TodosClient;
