import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreditCard from './CreditCard';

function renderCreditCard(){
    //Act
    return render(<CreditCard/>);
}

test('renders card number', () => {
  renderCreditCard();

  //Assert
  const cardNumberElement = screen.getAllByPlaceholderText(/Credit card number/i);
  expect(cardNumberElement).toBeInTheDocument();
});

test('renders cvc', () => {
    renderCreditCard();
  
    //Assert
    const cvcElement = screen.getAllByPlaceholderText(/CVC/i);
    expect(cvcElement).toBeInTheDocument();
});

test('renders expiry label', () => {
    renderCreditCard();
  
    //Assert
    const expiryLabelElement = screen.getByLabelText(/Expiry/i);
    expect(expiryLabelElement).toBeInTheDocument();
});

test('renders expiry date picker', () => {
    //Act
    const {container} = renderCreditCard();

    //Assert
    const expiryDatePickerElement = container.getElementsByClassName("react-datepicker__input-container");
    expect(expiryDatePickerElement).toBeInTheDocument();
});

test('submit button should be disabled when card number is empty'), () => {

}

test('submit button should be disabled when cvc is empty'), () => {
    
}

test('submit button should be enabled when all input fields are not empty'), () => {
    
}

test('submit button should log credit card info to console when enabled'), () => {
    
}