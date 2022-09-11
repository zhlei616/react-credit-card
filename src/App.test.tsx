import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  //Act
  const {container} = render(<App />);

  //Assert
  const headerElement = container.getElementsByClassName("App");
  expect(headerElement).toBeInTheDocument();
});