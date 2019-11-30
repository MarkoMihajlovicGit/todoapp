import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/todo.reducer';

const initialTodos = [{ id: 1, completed: false, task: 'Walk a dog' }];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  //todos
  //all methods to interact with todos
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
