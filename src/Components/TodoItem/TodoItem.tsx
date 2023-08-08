import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { checkTodo, setTodoList, updateTodo } from '../../store/reducers/todoListSlice';
import { ITodo } from '../../store/models/ITodo';

export const TodoItem = ({ todo }: { todo: ITodo }) => {
  const dispatch = useAppDispatch();

  const completedClasses = todo.isCompleted ? 'line-through text-gray-300' : '';
  const [isEditing, setIsEditing] = useState(false);
  const todoList = useAppSelector((state) => state.todoListReducer.todoList);

  const newTitleRef = useRef<HTMLTextAreaElement>(null);

  function startEditTodoHandler(id: number) {
    setIsEditing(true);
  }

  function finishEditTodoHandler(id: number) {
    if (!newTitleRef.current) return;
    if (!newTitleRef.current.value.length) return;

    setIsEditing(false);

    dispatch(updateTodo({ id, title: newTitleRef.current.value }));
  }

  const onDeleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id != id);
    dispatch(setTodoList(newTodoList));
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const onCheckTodo = (id: number) => {
    dispatch(checkTodo({ id }));
  };

  return (
    <div className='flex flex-row justify-between align-center py-2 px-4 my-2 bg-white '>
      <input type='checkbox' onChange={() => onCheckTodo(todo.id)} name='done' checked={todo.isCompleted} />
      {isEditing ? (
        <textarea ref={newTitleRef} defaultValue={todo.title}></textarea>
      ) : (
        <span className={'pt-1.5 ' + completedClasses}>{todo.title}</span>
      )}
      <div className='ToDoControls'>
        {isEditing ? (
          <FontAwesomeIcon
            icon={faSquareCheck}
            className='p-2 text-green-400 cursor-pointer hover:text-cyan-600'
            onClick={() => finishEditTodoHandler(todo.id)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className='p-2 text-cyan-400 cursor-pointer hover:text-cyan-600'
            onClick={() => startEditTodoHandler(todo.id)}
          />
        )}
        <FontAwesomeIcon
          onClick={() => onDeleteTodo(todo.id)}
          icon={faTrash}
          className='p-2 ml-2 text-red-400 cursor-pointer hover:text-red-600'
        />
      </div>
    </div>
  );
};
