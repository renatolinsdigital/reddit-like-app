import axios from 'axios'
import { PostEntryInfo, User } from "../domain/models";
import { PostEntriesState, UserState } from "./store.model";
import { configureStore, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const POST_ENTRIES_API = 'https://www.mocky.io/v2/5a6bc16631000078341b8b77'

// ------------- Current/logged user -------------

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

// ------------- Post entries -------------

export const fetchPostEntries = createAsyncThunk('postEntries/fetchPostEntries',
  async (_, { rejectWithValue }) => await axios.get(POST_ENTRIES_API))

const emptyPostEntriesState: PostEntriesState = {
  hasError: false,
  isLoading: false,
  value: [] as PostEntryInfo[]
};

const postEntriesSlice = createSlice({
  name: "postEntries",
  initialState: emptyPostEntriesState,
  reducers: {
    setPostEntries: (state: PostEntriesState, action: PayloadAction<PostEntryInfo[]>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPostEntries.pending, (state) => {
        state.isLoading = true;
      });
    //TODO: Add better type definitions to payload action
    builder.addCase(fetchPostEntries.fulfilled, (state, action: PayloadAction<any>) => {
      state.value = action.payload.data.links;
      state.hasError = false;
      state.isLoading = false;

    })
    builder.addCase(fetchPostEntries.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    })

  }
});

export const { setPostEntries } = postEntriesSlice.actions;

// Store config

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    postEntries: postEntriesSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});


