import { createSlice } from '@reduxjs/toolkit';
import { CreditCardProps } from '../models/CreditCardProps';

const initialState: CreditCardProps = {
    CardNumber: "",
    Cvc: "",
    Expiry: ""
}

export const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState,
    reducers: {
      updateCardNumber: (state, action) => {
        state.CardNumber = action.payload
      },
      updateCvc: (state, action) => {
        state.Cvc = action.payload
      },
      updateExpiry: (state, action) => {
        state.Expiry = action.payload
      },
    },
  })
  
  export const { updateCardNumber, updateCvc, updateExpiry } = creditCardSlice.actions
  
  export default creditCardSlice.reducer