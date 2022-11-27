import { PostEntry, User } from "./domain/models";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Current/logged user

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

// Post entries

const emptyPostEntries = [] as PostEntry[];

const postEntriesSlice = createSlice({
  name: "postEntries",
  initialState: emptyPostEntries,
  reducers: {
    setPostEntries: (_, action: PayloadAction<PostEntry[]>) => action.payload,
  }
});

export const { setPostEntries } = postEntriesSlice.actions;

// Store config

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    postEntries: postEntriesSlice.reducer
  }
});
