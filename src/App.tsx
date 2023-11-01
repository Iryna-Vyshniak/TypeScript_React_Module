import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';

type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  // variants to use hooks with ts
  // const [] = useState<string[] | null>(null);
  // const [] = useState<ITodo | null>(null);
  // const [] = useState<ITodo>({} as ITodo);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const AddTodo = () => {
    setTodos([text, ...todos]);
    setText('');
  };

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={AddTodo} />
      <ul>
        <TodoItem
          id="123"
          completed={false}
          title="first todo"
          style={{ border: '1px solid gray' }}
        />
      </ul>
    </div>
  );
}

export default App;
