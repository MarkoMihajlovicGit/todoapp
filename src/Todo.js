import React, { useContext } from 'react';
import { TodosContext } from './contexts/todos.context';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';

import { Checkbox } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ListItemSecondaryAction } from '@material-ui/core';

export default function Todo({ task, completed, id }) {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);

  return (
    <>
      <ListItem style={{ height: '4em' }} disabled={completed}>
        {isEditing ? (
          <EditTodoForm
            id={id}
            task={task}
            toggleEditForm={toggle}
          ></EditTodoForm>
        ) : (
          <>
            <Checkbox
              checked={completed}
              tabIndex={-1}
              onClick={() => dispatch({ type: 'TOGGLE', id: id })}
            ></Checkbox>
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="edit" onClick={toggle}>
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                aria-label="delete"
                // onClick={removeTodoAndStopPropagation}
                onClick={() => dispatch({ type: 'REMOVE', id: id })}
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
