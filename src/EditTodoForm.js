import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
export default function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '100%' }}
    >
      <TextField
        autoFocus
        fullWidth
        value={value}
        onChange={handleChange}
        margin="normal"
        placeholder="Edit Form"
        required
        inputProps={{ maxLength: 45 }}
      ></TextField>
    </form>
  );
}
