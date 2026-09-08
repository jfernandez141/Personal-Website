import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Jhamil Fernandez/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ls \.\/work/i })).toHaveAttribute('href', '#work');
});
