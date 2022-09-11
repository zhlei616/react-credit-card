import { configureStore } from '@reduxjs/toolkit'
import creditCardReducer from './reducers/creditCardReducer'

export default configureStore({
  reducer: {
    creditCard: creditCardReducer,
  },
});