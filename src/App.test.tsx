import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from './utils/test-utils'
import App from './App'

test('Should render form title', () => {
  //Arrange
  renderWithProviders(<App />);

  //Assert
  expect(screen.getByText("Register card form")).toBeInTheDocument();
});

test('Should render salute', () => {
  //Arrange
  renderWithProviders(<App />);

  //Assert
  expect(screen.getByText(/Welcome/)).toBeInTheDocument();
});

test('Should render menu title', () => {
  //Arrange
  renderWithProviders(<App />);

  //Act
  fireEvent.click(screen.getByAltText('Menu'));

  //Assert
  expect(screen.getByText("Menu")).toBeInTheDocument();
});

test('Should render menu content', () => {
  //Arrange
  renderWithProviders(<App />);

  //Act
  fireEvent.click(screen.getByAltText('Menu'));

  //Assert
  expect(screen.getByText("This is menu content")).toBeInTheDocument();
});

test('Submit button should not be enabled for initial state', () => {
  //Arrange
  renderWithProviders(<App />);

  //Assert
  const submitButton = screen.getByRole('button', {name: "Submit"});
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeDisabled();
});

test('Credit card number should handle user input correctly', () => {
  //Arrange
  renderWithProviders(<App />);

  //Act
  const cardNumberInput = screen.getByPlaceholderText("Credit card number");
  fireEvent.change(cardNumberInput, {target: {value: '1234abc4567d8912'}});

  //Assert
  expect(cardNumberInput).toHaveValue("1234 4567 8912");
});

test('Cvc number should handle user input correctly', () => {
  //Arrange
  renderWithProviders(<App />);

  //Act
  const cvcInput = screen.getByPlaceholderText("CVC");
  fireEvent.change(cvcInput, {target: {value: '1 2 3 a'}});

  //Assert
  expect(cvcInput).toHaveValue("123");
});

test('Submit button should be enabled when card number and cvc are not empty', () => {
  //Arrange
  renderWithProviders(<App />);

  //Act
  const cardNumberInput = screen.getByPlaceholderText("Credit card number");
  fireEvent.change(cardNumberInput, {target: {value: '1234567890123456'}});
  const cvcInput = screen.getByPlaceholderText("CVC");
  fireEvent.change(cvcInput, {target: {value: '123'}});

  //Assert
  const submitButton = screen.getByRole('button', {name: "Submit"});
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeEnabled();
});