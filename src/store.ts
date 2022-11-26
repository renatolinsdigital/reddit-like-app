import { User } from "./domain/models";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const emptyUser = {} as User;

const userSlice = createSlice({
  name: "user",
  initialState: emptyUser,
  reducers: {
    setLoggedUser: (_, action: PayloadAction<User>) => action.payload,
    setEmptyUser: () => emptyUser
  }
});

export const { setLoggedUser, setEmptyUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});