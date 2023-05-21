import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const currencySlice = createSlice({
  name: 'currency',
  initialState: '',
  reducers: {
    updateCurrency: (state, action: PayloadAction<string>) => {
      return state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateCurrency } = currencySlice.actions

export default currencySlice.reducer