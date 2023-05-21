import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const DisplayCartSlice = createSlice({
  name: 'displayCart',
  initialState: false,
  reducers: {
    displayCart: (state, action: PayloadAction<boolean>) => {
      return state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {displayCart } = DisplayCartSlice.actions

export default DisplayCartSlice.reducer