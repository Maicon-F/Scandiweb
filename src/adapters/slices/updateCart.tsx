import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const updateCartSlice = createSlice({
  name: 'updateCart',
  initialState: false,
  reducers: {
    updateCart: (state, action: PayloadAction<boolean>) => {
      return state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateCart } = updateCartSlice.actions

export default updateCartSlice.reducer