import React from 'react';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';
import { List } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
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
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              ></Todo>
              {i < todos.length - 1 && <Divider></Divider>}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
