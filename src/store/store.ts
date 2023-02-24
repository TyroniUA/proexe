import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { usersSlice } from './userSlice';
import { modalSlice } from './modalSlice';


const rootReducer = {
  user: usersSlice.reducer,
  modal: modalSlice.reducer,
}

const store = configureStore({
  reducer: rootReducer
})

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store