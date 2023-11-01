import React from 'react';

// interface TodoItemProps {} or

interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
  style?: React.CSSProperties;
}

const TodoItem = ({ id, title, completed, style = {} }: ITodoItem) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
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
