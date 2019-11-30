import React, { useContext } from 'react';
import { TodosContext } from './contexts/todos.context';
import useInputState from './hooks/useInputState';
import { TextField } from '@material-ui/core';
export default function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodosContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id: id, newTask: value });
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
