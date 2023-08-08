import { useAppSelector } from '../../store/hooks/redux';
import { ITodo } from '../../store/models/ITodo';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todoListReducer.todoList);

  return (
    <div className='flex flex-col'>
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
