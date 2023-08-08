import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { TodoListControls } from './TodoListControls';
import App from '../App/App';
import { TodoItem } from '../TodoItem/TodoItem';

describe('Test TodoListControls', () => {
  test('test clear list', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const clearListButton = screen.getByTestId('test-clear');
    const noTodosElement = screen.queryByTestId('notodos');
    fireEvent.click(clearListButton);
    expect(noTodosElement).toBeInTheDocument();
  });
});
