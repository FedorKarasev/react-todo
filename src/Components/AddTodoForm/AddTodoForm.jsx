import React, { useState } from 'react';

export const AddTodoForm = ({ onSubmitForm }) => {
  let [todoTitle, setTodoTitle] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangeHandle = (e) => {
    setTodoTitle((todoTitle) => e.target.value);
    e.target.value ? setIsDisabled(false) : setIsDisabled(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitForm(todoTitle);
    setTodoTitle('');
    setIsDisabled(true);
  };

  return (
    <form className='mb-5' onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={todoTitle}
        onChange={onChangeHandle}
        className='rounded-md py-2 px-5'
        placeholder='Мне нужно...'
      />
      <button
        type='submit'
        className='ml-4 rounded-md py-2 px-5 bg-blue-300 text-center disabled:bg-blue-100 disabled:text-gray-400'
        disabled={isDisabled}
      >
        Добавить задачу
      </button>
    </form>
  );
};
