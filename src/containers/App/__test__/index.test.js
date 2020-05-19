import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

test('renders learn react text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/home page/i);
  expect(linkElement).toBeInTheDocument();
});
