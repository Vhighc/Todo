import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} class='mb-[32px]'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            class='placeholder:text-[#e2e2e2] text-[#fff] bg-transparent w-[320px] outline-hidden pt-[14px] pr-[32px] pb-[14px] pl-[16px] rounded-t-[4px] rounded-r-[0] rounded-b-[0] rounded-l-[4px] border-solid border-[2px] border-bord-blue'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            class='placeholder:text-[#e2e2e2] text-[#fff] bg-transparent w-[320px] outline-hidden pt-[14px] pr-[32px] pb-[14px] pl-[16px] rounded-t-[4px] rounded-r-[0] rounded-b-[0] rounded-l-[4px] border-solid border-[2px] border-bord-blue'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;