import React, { useRef } from 'react';

interface INewTodoForm {
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // or
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
  // handleClick: () => void;
  handleClick: (text: string) => void;
}

const NewTodoForm = ({ /* value, onChange, */ handleClick }: INewTodoForm) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      if (!inputRef.current.value) return;
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="new todo"
        // value={value} // керована форма
        // onChange={onChange}
        ref={inputRef} // некерована форма
      />
      {/* <button onClick={handleClick}>Add Todo</button> */}
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
};

export default NewTodoForm;
