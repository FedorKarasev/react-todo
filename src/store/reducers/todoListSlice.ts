import { ITodo } from '../models/ITodo';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';

interface todoState {
  todoList: ITodo[];
}

const initialState: todoState = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<ITodo[]>) {
      state.todoList = action.payload;
    },

    updateTodo(state, action: PayloadAction<{ id: number; title: string }>) {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          todo.updatedAt = Date.now();
          return todo;
        }
        return todo;
      });
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },

    checkTodo(state, action: PayloadAction<{ id: number }>) {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
  },
});

export const { setTodoList, updateTodo, checkTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
