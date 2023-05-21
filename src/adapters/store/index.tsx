import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/index';
import categoryReducer from '../slices/category';
import DisplayCart from '../slices/displayCart';
import currencyReducer from '../slices/currency';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    displayCart: DisplayCart,
    currency: currencyReducer,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch