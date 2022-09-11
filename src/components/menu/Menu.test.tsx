import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders menu', () => {
  //Act
  render(<Menu/>);

  //Assert
  const headerElement = screen.getByText(/Menu/i);
  expect(headerElement).toBeInTheDocument();

  const contentElement = screen.getByText(/This is menu content/i);
  expect(contentElement).toBeInTheDocument();
});