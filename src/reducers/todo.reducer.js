import uuidv4 from 'uuid/v4';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: uuidv4(),
          task: action.task,
          completed: false
        }
      ];
    case 'REMOVE':
      return state.filter(todo => action.id !== todo.id);

    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );

    default:
      return state;
  }
};

export default reducer;

// const addTodo = newTodoText => {
//   setTodos([
//     ...todos,
//     {
//       id: uuidv4(),
//       task: newTodoText,
//       completed: false
//     }
//   ]);
// };

// const removeTodo = todoId => {
//   const updatedTodos = todos.filter(todo => todoId !== todo.id);

//   setTodos(updatedTodos);
// };

// const toggleTodo = todoId => {
//   const updatedTodos = todos.map(todo =>
//     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//   );
//   setTodos(updatedTodos);
// };

// const editTodo = (todoId, newTask) => {
//   const updatedTodos = todos.map(todo =>
//     todo.id === todoId ? { ...todo, task: newTask } : todo
//   );
//   setTodos(updatedTodos);
// };
