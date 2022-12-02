import { PostEntryInfo, User } from "../domain/models";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostEntriesState, UserState } from "./store.model";

// Current/logged user

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

// Post entries

const emptyPostEntriesState: PostEntriesState = {
  value: [] as PostEntryInfo[]
};

const postEntriesSlice = createSlice({
  name: "postEntries",
  initialState: emptyPostEntriesState,
  reducers: {
    setPostEntries: (state: PostEntriesState, action: PayloadAction<PostEntryInfo[]>) => {
      state.value = action.payload;
    },
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


