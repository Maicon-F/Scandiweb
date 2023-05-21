import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const categorySlice = createSlice({
  name: 'category',
  initialState: '',
  reducers: {
    updateCategory: (state, action: PayloadAction<string>) => {
      return state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateCategory } = categorySlice.actions

export default categorySlice.reducer