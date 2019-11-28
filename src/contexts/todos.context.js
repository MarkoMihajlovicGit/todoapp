import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const initialTodos = [{ id: 1, completed: false, task: 'Walk a dog' }];

export const TodosContext = createContext();

export function TodosProvider(props) {
  //todos
  //all methods to interact with todos
  const todosStuff = useTodoState(initialTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
