import App from './App';
import { render, screen } from '@testing-library/react';

test('renders the app with ordering text', async () => {
  render(<App />);
  const someText = screen.getByText(/Order results/i);
  expect(someText).toBeInTheDocument();
});
