import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ todos, onDeleteTodo, onCheckTodo, onEditTodo }) => {
  return (
    <div className='flex flex-col'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};
