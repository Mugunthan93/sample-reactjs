import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface UserListState {
  users: any[];
}

// Define the initial state using that type
const initialState: UserListState = {
  users: [],
};

export const UserState = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<user>) => {
      state.users.push(action);
    },
    remove: (state, action: PayloadAction<number>) => {
      (state.users as any[]).slice(action - 1, action);
    },
  },
});

export const { add, remove } = UserState.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users;

export default UserState.reducer;
