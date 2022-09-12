import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      updateCardNumber: (state, action: PayloadAction<string>) => {
        state.CardNumber = action.payload
      },
      updateCvc: (state, action: PayloadAction<string>) => {
        state.Cvc = action.payload
      },
      updateExpiry: (state, action: PayloadAction<string>) => {
        state.Expiry = action.payload
      },
    },
  })
  
  export const { updateCardNumber, updateCvc, updateExpiry } = creditCardSlice.actions
  
  export default creditCardSlice.reducer