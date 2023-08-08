import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { setTodoList } from '../../store/reducers/todoListSlice';

export const AddTodoForm = () => {
  let [todoTitle, setTodoTitle] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const todoList = useAppSelector((state) => state.todoListReducer.todoList);
  const dispatch = useAppDispatch();

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle((todoTitle) => e.target.value);
    e.target.value ? setIsDisabled(false) : setIsDisabled(true);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todoTitle);
    setTodoTitle('');
    setIsDisabled(true);
  };

  const createTodo = (todoTitle: string) => {
    const todoItem = {
      id: Number(new Date()),
      title: todoTitle,
      createdAt: Date.now().toString(),
      updatedAt: null,
      isCompleted: false,
    };
    dispatch(setTodoList([...todoList, todoItem]));
    localStorage.setItem('todoList', JSON.stringify([...todoList, todoItem]));
  };

  return (
    <form className='mb-5' onSubmit={(e) => onSubmitHandler(e)}>
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
