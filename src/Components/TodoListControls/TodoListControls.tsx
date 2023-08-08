import React from 'react';
import { AppDispatch } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { setTodoList } from '../../store/reducers/todoListSlice';
import { ITodo } from '../../store/models/ITodo';

export const TodoListControls = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todoListReducer.todoList);

  const clearTodoList = () => {
    dispatch(setTodoList([]));
    localStorage.setItem('todoList', JSON.stringify([]));
  };

  const filterTodoList = (isCompleted: boolean | string) => {
    let filteredTodoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    filteredTodoList = filteredTodoList.filter((todo: ITodo) => {
      if (isCompleted == 'all') return todoList;
      return todo.isCompleted == isCompleted;
    });
    dispatch(setTodoList(filteredTodoList));
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-between items-center w-full'>
        <a
          href='#'
          className='w-1/2 px-5 py-2 rounded-md bg-gray-300 text-center'
          onClick={() => filterTodoList(false)}
        >
          Открытые задачи
        </a>
        <a
          href='#'
          className='w-1/2 px-5 py-2 ml-2 rounded-md bg-gray-300 text-center'
          onClick={() => filterTodoList(true)}
        >
          Завершенные задачи
        </a>
        <a
          href='#'
          className='w-1/2 px-5 py-2 ml-2 rounded-md bg-gray-300 text-center'
          onClick={() => filterTodoList('all')}
        >
          Все задачи
        </a>
      </div>
      <a href='#' onClick={clearTodoList} className='mt-2 w-1/2 px-5 py-2 rounded-md bg-gray-300 text-center'>
        Очистить список
      </a>
    </div>
  );
};
