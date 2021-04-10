import { render, screen } from '@testing-library/react';
import App from './App';

test('renders list link', () => {
  render(<App />);
  const linkElement = screen.getByText(/list/i);
  expect(linkElement).toBeInTheDocument();
});
