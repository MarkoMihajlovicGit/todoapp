import React from 'react';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');

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
