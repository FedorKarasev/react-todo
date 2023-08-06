import React from 'react';

export const TodoListControls = ({ clearTodoList, filterTodoList }) => {
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
