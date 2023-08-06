import { useEffect, useState } from 'react';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoListControls } from '../TodoListControls/TodoListControls';

interface ITodo {
  id: number;
  title: string;
  createdAt: string | Date;
  updatedAt: string | null;
  isCompleted: boolean;
}

// const todos: ITodo[] = [
//   { id: 1, title: 'Приготовить яичницу', createdAt: '123', updatedAt: null, isCompleted: false },
//   { id: 2, title: 'Съесть яичницу', createdAt: '124', updatedAt: null, isCompleted: false },
//   { id: 3, title: 'Поработать', createdAt: '125', updatedAt: null, isCompleted: false },
//   { id: 4, title: 'Покакать', createdAt: '126', updatedAt: null, isCompleted: false },
//   { id: 5, title: 'Приготовить яичницу', createdAt: '127', updatedAt: null, isCompleted: false },
//   { id: 6, title: 'Приготовить яичницу', createdAt: '111', updatedAt: null, isCompleted: false },
//   { id: 7, title: 'Приготовить яичницу', createdAt: '111', updatedAt: null, isCompleted: false },
// ];

function App() {
  let todos;

  useEffect(() => {
    todos = localStorage.getItem('todoList');
    todos = todos !== null ? JSON.parse(todos) : [];
    setTodoList(todos);
  }, []);

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addTodoFormSubmitHandler = (todoTitle: string) => {
    const todoItem = {
      id: Number(new Date()),
      title: todoTitle,
      createdAt: new Date(),
      updatedAt: null,
      isCompleted: false,
    };
    setTodoList([...todoList, todoItem]);
    localStorage.setItem('todoList', JSON.stringify([...todoList, todoItem]));
  };

  const onDeleteTodoHandler = (id: number): void => {
    const newTodoList = todoList.filter((todo) => todo.id != id);
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const clearTodoListHandler = () => {
    setTodoList([]);
    localStorage.setItem('todoList', JSON.stringify([]));
  };

  const onCheckTodoHandler = (id: number) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  const filterTodoListHandler = (isCompleted: boolean | string) => {
    let filteredTodoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    filteredTodoList = filteredTodoList.filter((todo: ITodo) => {
      if (isCompleted == 'all') return todoList;
      return todo.isCompleted == isCompleted;
    });
    setTodoList(filteredTodoList);
  };

  const onEditTodoHandler = (id: number, newTitle: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
        return todo;
      }
      return todo;
    });

    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  return (
    <div className='flex flex-col justify-center items-center bg-blue-200 h-screen'>
      <h1 className='text-2xl mb-4'>Список дел</h1>
      <div className='flex flex-col bg-gray-100 h-fit p-4 rounded-lg'>
        <div className=''>
          <AddTodoForm onSubmitForm={addTodoFormSubmitHandler} />
          <TodoListControls filterTodoList={filterTodoListHandler} clearTodoList={clearTodoListHandler} />
          <TodoList
            todos={todoList}
            onEditTodo={onEditTodoHandler}
            onCheckTodo={onCheckTodoHandler}
            onDeleteTodo={onDeleteTodoHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
