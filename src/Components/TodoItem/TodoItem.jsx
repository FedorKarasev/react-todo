import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

export const TodoItem = ({ todo, onDeleteTodo, onCheckTodo, onEditTodo }) => {
  const completedClasses = todo.isCompleted ? 'line-through text-gray-300' : '';

  const [isEditing, setIsEditing] = useState(false);
  const newTitleRef = useRef('');

  function startEditTodoHandler(id) {
    setIsEditing(true);
  }

  function finishEditTodoHandler(id) {
    if (!newTitleRef.current.value.length) return;
    setIsEditing(false);
    onEditTodo(id, newTitleRef.current.value);
  }

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
