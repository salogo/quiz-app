import React from 'react';
import { render } from '@testing-library/react';
import App from '@Containers/App';

test('renders Quiz App link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
