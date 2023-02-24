import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/types';
import { AppThunk } from './store';
interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const userId = action.payload;
      state.users = state.users.filter(user => user.id !== userId);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    fetchUsersStart(state) {
      state.loading = true
      state.error = null
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload
      state.loading = false
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
  },
});

export const fetchUsers  = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchUsersStart())
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
    dispatch(fetchUsersSuccess(users))
  } catch (error) {
    dispatch(fetchUsersFailure(error))
  }



};
export const {
  setUsers,
  addUser,
  deleteUser,
  updateUser,
  setLoading,
  setError,
  fetchUsersStart, fetchUsersSuccess, fetchUsersFailure
} = usersSlice.actions;