import { createQuery } from 'react-query-kit';

import Request from 'src/libs/request/api';

export const endpoint = '/todos';

export class Todo extends Request {}

export const todo = new Todo();

export const useTodos = createQuery<Model.Todo, SearchParam.Todo>({
  primaryKey: endpoint,
  queryFn: async ({ queryKey }) => {
    const [key, params] = queryKey;

    const { data } = await todo.get(key, { params });

    return data;
  },
});
