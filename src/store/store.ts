import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoListReducer from './reducers/todoListSlice';

const rootReducer = combineReducers({
  todoListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
