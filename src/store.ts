import { User } from "./domain/models";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Current/logged user

export interface UserState {
  value: User
}

const emptyUserState: UserState = {
  value: {} as User
};

const userSlice = createSlice({
  name: "user",
  initialState: emptyUserState,
  reducers: {
    setLoggedUser: (state: UserState, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    setEmptyUser: (state: UserState) => { state.value = {} as User }
  }
});

export const { setLoggedUser, setEmptyUser } = userSlice.actions;

// Store config

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

// Types

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



