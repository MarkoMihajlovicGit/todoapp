import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ListItemSecondaryAction } from '@material-ui/core';

export default function Todo({
  task,
  completed,
  id,
  removeTodo,
  toggleTodo,
  editTodo
}) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <>
      <ListItem style={{ height: '4em' }} disabled={completed}>
        {isEditing ? (
          <EditTodoForm
            editTodo={editTodo}
            id={id}
            task={task}
            toggleEditForm={toggle}
          ></EditTodoForm>
        ) : (
          <>
            <Checkbox
              checked={completed}
              tabIndex={-1}
              onClick={() => toggleTodo(id)}
            ></Checkbox>
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="edit"
                // onClick={editTodoAndStopPropagation}
                onClick={toggle}
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                aria-label="delete"
                // onClick={removeTodoAndStopPropagation}
                onClick={() => removeTodo(id)}
              >
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
}