import React from 'react';

interface INewTodoForm {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // or
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: () => void;
}

const NewTodoForm = ({ value, onChange, handleClick }: INewTodoForm) => {
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add Todo</button>
    </>
  );
};

export default NewTodoForm;
