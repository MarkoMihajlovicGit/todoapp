import React, { createContext } from 'react';
import reducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const initialTodos = [{ id: 1, completed: false, task: 'Walk a dog' }];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  //todos
  //all methods to interact with todos
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    initialTodos,
    reducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
