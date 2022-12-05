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
  value: [] as PostEntryInfo[],
  filteredValue: [] as PostEntryInfo[]
};

export const postEntriesSlice = createSlice({
  name: "postEntries",
  initialState: emptyPostEntriesState,
  reducers: {
    setPostEntries: (state: PostEntriesState, { payload }: PayloadAction<PostEntryInfo[]>) => {
      state.value = payload;
      state.filteredValue = payload;
    },
    filterByText: (state: PostEntriesState, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toUpperCase();
      if (searchQuery === 'ALL') {
        state.filteredValue = [...state.value]
        return;
      }
      const filteredPostEntries = state.value
        .filter((post) => {
          const { category } = post;
          const { title, author, url } = post.meta;
          return `${category} ${author} ${title} ${url}`.toUpperCase().includes(searchQuery)
        })
      state.filteredValue = filteredPostEntries;
    },
    orderByUpvotes: (state: PostEntriesState) => {
      state.filteredValue = state.filteredValue.sort((a, b) => b.upvotes - a.upvotes);
    },
    orderByComments: (state: PostEntriesState) => {
      state.filteredValue = state.filteredValue.sort((a, b) => b.comments - a.comments);
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
      state.filteredValue = action.payload.data.links;
      state.hasError = false;
      state.isLoading = false;
    })
    builder.addCase(fetchPostEntries.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    })
  }
});

export const { setPostEntries, filterByText, orderByUpvotes, orderByComments } = postEntriesSlice.actions;