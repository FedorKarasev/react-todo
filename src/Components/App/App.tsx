import { useEffect, useState } from 'react';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoListControls } from '../TodoListControls/TodoListControls';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { setTodoList } from '../../store/reducers/todoListSlice';

function App() {
  let todos;

  const dispatch = useAppDispatch();

  useEffect(() => {
    todos = localStorage.getItem('todoList');
    todos = todos !== null ? JSON.parse(todos) : [];
    dispatch(setTodoList(todos));
  }, []);

  return (
    <div className='flex flex-col justify-center items-center bg-blue-200 h-screen'>
      <h1 className='text-2xl mb-4'>Список дел</h1>
      <div className='flex flex-col bg-gray-100 h-fit p-4 rounded-lg'>
        <AddTodoForm />
        <TodoListControls />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
