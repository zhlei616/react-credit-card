import React from 'react';
import { render, screen } from '@testing-library/react';
import CardRegisterForm from './CardRegisterForm';
import { UserProps } from '../../models/UserProps';

function renderCardRegisterForm(){
  //Arrange
  const currentUser : UserProps = {
    FirstName: "Larry",
    LastName: "Zhang"
  };

  //Act
  render(<CardRegisterForm {...currentUser}/>);
}

test('renders header', () => {
  renderCardRegisterForm();

  //Assert
  const headerElement = screen.getByText(/Register card form/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders salute', () => {
  renderCardRegisterForm();

  //Assert
  const headerElement = screen.getByText(/Welcome Larry/i);
  expect(headerElement).toBeInTheDocument();
});