import React, { useContext } from 'react';
import { TodosContext } from './contexts/todos.context';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(TodosContext);
  return (
    <Paper
      style={{
        backgroundColor: '#e7edf1',
        margin: '1rem 0',
        padding: '0 1rem'
      }}
    >
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          autoFocus
          fullWidth
          value={value}
          onChange={handleChange}
          margin="normal"
          placeholder="Add New Todo"
          required
          inputProps={{ maxLength: 45 }}
        ></TextField>
      </form>
    </Paper>
  );
}
