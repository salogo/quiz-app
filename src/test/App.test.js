import React from 'react';
import { render } from '@testing-library/react';
import App from '../containers/App';

test('renders Quiz App link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Quiz App/i);
  expect(linkElement).toBeInTheDocument();
});
