import App from './App';
import { render, screen } from '@testing-library/react';

test('renders the app with a button on its header', () => {
  render(<App />);
  const headerButton = screen.getByText(/Add Post/i);
  expect(headerButton).toBeInTheDocument();
});
