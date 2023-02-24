import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/types';
interface ModalState {
  isOpen: boolean;
  user: User | null
}

const initialState: ModalState = {
  isOpen: false,
  user: null
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<User>) {
      state.isOpen = true;
      state.user = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.user = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;