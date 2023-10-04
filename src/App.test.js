import { render, screen } from '@testing-library/react';
import App from './App';
import { sum } from './sum'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 1)).toBe(3);
});