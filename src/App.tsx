import { useEffect, useState } from 'react';
import './index.css';
import NewTodoForm from './components/NewTodoForm';
import { ITodo } from './types';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  // const [text, setText] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);
  // variants to use hooks with ts
  // const [] = useState<string[] | null>(null);
  // const [] = useState<ITodo | null>(null);
  // const [] = useState<ITodo>({} as ITodo);

  //  variant with value and onChange
  // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // };

  // const AddTodo = () => {
  //   const newTodo: ITodo = {
  //     id: new Date().toString(),
  //     completed: false,
  //     title: text,
  //   };
  //   setTodos([newTodo, ...todos]);
  //   setText('');
  // };

  // another variant
  const addTodo = (text: string) => {
    const newTodo: ITodo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: ITodo['id']) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  const removeTodo = (id: ITodo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: ITodo[]) => setTodos(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Counter title="React + TS" />
        <NewTodoForm
          /* value={text} onChange={handleInput} */
          handleClick={addTodo}
        />
        <TodoList
          list={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
        {/* <ul>
        <TodoItem
          id="123"
          completed={false}
          title="first todo"
          style={{ border: '1px solid gray' }}
        />
      </ul> */}
      </div>
    </div>
  );
}

export default App;
