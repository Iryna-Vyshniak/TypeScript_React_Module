import { useRef, useState } from 'react';

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
  const [open, setOpen] = useState<boolean>(false);

  const onClick = () => {
    if (inputRef.current) {
      if (!inputRef.current.value) return;
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const toggleBtn = () => {
    setOpen(!open);
  };

  return (
    <div id="form" className="form form-todo">
      <div
        id="heading"
        className="glass glass--gradient glass--heading"
        onClick={toggleBtn}
      >
        <span className="form-header">
          <span className="form-icon"></span>
          <span className="form-title">
            What would you like to do today?
          </span>{' '}
        </span>
        <button
          className={open ? 'form-close-button open' : 'form-close-button'}
        >
          ✕
        </button>
      </div>

      <div id="input" className={open ? 'glass open' : ''}>
        <input
          type="text"
          placeholder="Type your request here"
          // value={value} // керована форма
          // onChange={onChange}
          ref={inputRef} // некерована форма
        />
        <button className="add" onClick={onClick}>
          Add Todo
        </button>
      </div>

      {/* <button onClick={handleClick}>Add Todo</button> */}
    </div>
  );
};

export default NewTodoForm;
