import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('TEST APP', () => {
  test('test with render not existing element', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).toBeNull();
  });
});
