import { ITodo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  list: ITodo[];
  toggleTodo: (id: ITodo['id']) => void;
  removeTodo: (id: ITodo['id']) => void;
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {list.map(todo => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
