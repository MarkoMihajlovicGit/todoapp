import React from 'react';
import useTodoState from './hooks/useTodoState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

export default function TodoApp() {
  const initialTodos = [
    { id: 1, completed: false, task: 'read' },
    { id: 2, completed: true, task: 'sleep' },
    { id: 3, completed: false, task: 'repeat' }
  ];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#a1b8c7'
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1.5rem' }}>
        <Grid item xs={11} md={8} lg={5}>
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          ></TodoList>
        </Grid>
      </Grid>
    </Paper>
  );
}
