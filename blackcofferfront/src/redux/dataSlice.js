import { createSlice } from '@reduxjs/toolkit';
import getMatchingData, { getSearchData } from './thunks/fatchMatching';
import getData from './thunks/fetchAllData';

const matchingSlice = createSlice({
    name: 'matching',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
          .addCase(getMatchingData.pending, (state, action) => {
            state.loading = true;
          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(getMatchingData.fulfilled, (state, action) => {
            state.data.push(action.payload);
            state.loading = false;
          })
          .addCase(getMatchingData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          })
      },
})

const dataSlice = createSlice({
  name: 'alldata',
  initialState: {
      allData: [],
      loading: false,
      error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
      builder
        .addCase(getData.pending, (state, action) => {
          state.loading = true;
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(getData.fulfilled, (state, action) => {
          state.allData.push(action.payload);
          state.loading = false;
        })
        .addCase(getData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        })
    },
})

const searchSlice = createSlice({
  name: 'search',
  initialState: {
      filter: [],
      loading: false,
      error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
      builder
        .addCase(getSearchData.pending, (state, action) => {
          state.loading = true;
        })
        // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(getSearchData.fulfilled, (state, action) => {
          state.filter.push(action.payload);
          console.log(action.payload, "payload")
          state.loading = false;
        })
        .addCase(getSearchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error;
        })
    },
})

export const matchingReducer = matchingSlice.reducer;
export const dataReducer = dataSlice.reducer;
export const searchReducer = searchSlice.reducer;