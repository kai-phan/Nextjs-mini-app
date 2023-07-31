import React from 'react';

import { dehydrate, QueryClient } from '@tanstack/react-query';

import { useTodos } from 'src/queries/todo';

export type Props = {
  className?: string;
};

const TodosServer: React.FC<Props> = () => {
  const { data, isLoading } = useTodos({
    variables: {},
    refetchOnMount: false,
  });

  if (isLoading) return <React.Fragment>Loading...</React.Fragment>;

  return <React.Fragment>{JSON.stringify(data)}</React.Fragment>;
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(useTodos.getKey({}), useTodos.queryFn);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TodosServer;
