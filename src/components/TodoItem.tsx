import React from 'react';
import { ITodo } from '../types';

// interface TodoItemProps {} or

interface ITodoItem extends ITodo {
  toggleTodo: (id: ITodo['id']) => void;
  removeTodo: (id: ITodo['id']) => void;
  style?: React.CSSProperties;
}

const TodoItem = ({
  id,
  title,
  completed,
  style = {},
  toggleTodo,
  removeTodo,
}: ITodoItem) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};
// const TodoItem: React.FC<ITodoItem> = ({ id, title, completed }) => {
//   return (
//     <li>
//       <input type="checkbox" checked={completed} />
//       <span>title</span>
//       <span>&times;</span>
//     </li>
//   );
// };

export default TodoItem;
