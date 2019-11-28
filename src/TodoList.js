import React, { useContext } from 'react';
import { TodosContext } from './contexts/todos.context';

import Paper from '@material-ui/core/Paper';
import Todo from './Todo';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper
        style={{
          backgroundColor: '#e7edf1'
        }}
      >
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={todo.id}>
              <Todo {...todo} key={todo.id}></Todo>
              {i < todos.length - 1 && <Divider></Divider>}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
