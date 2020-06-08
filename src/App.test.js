import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/哈哈哈/i);
  expect(linkElement).toBeInTheDocument();
});
test('bobobob', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/哈哈哈/i);
  expect(linkElement).toBeInTheDocument();
});
