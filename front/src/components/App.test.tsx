import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Student App text', () => {
  render(<App />);
  const textElement = screen.getByText(/Student App/i);
  expect(textElement).toBeInTheDocument();
});
