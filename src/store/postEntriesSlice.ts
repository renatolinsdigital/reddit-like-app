import axios from 'axios'
import { PostEntryInfo } from "../domain/models";
import { PostEntriesState } from "./store.model";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

//TODO: Find a better place for API consts
const POST_ENTRIES_API = 'https://www.mocky.io/v2/5a6bc16631000078341b8b77'

export const fetchPostEntries = createAsyncThunk(
  'postEntries/fetchPostEntries',
  async () => await axios.get(POST_ENTRIES_API)
)

const emptyPostEntriesState: PostEntriesState = {
  hasError: false,
  isLoading: false,
  value: [] as PostEntryInfo[]
};

export const postEntriesSlice = createSlice({
  name: "postEntries",
  initialState: emptyPostEntriesState,
  reducers: {
    setPostEntries: (state: PostEntriesState, action: PayloadAction<PostEntryInfo[]>) => {
      state.value = action.payload;
    },
    filterByText: (state: PostEntriesState, action: PayloadAction<string>) => {
      console.log(action.payload)
      // state.value = action.payload;
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