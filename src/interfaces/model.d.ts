declare namespace Model {
  export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
  }

  export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  }
}
