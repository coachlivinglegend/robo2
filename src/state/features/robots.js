import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
);

// with async await
// export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   return await response.json();
// })

export const robotsSlice = createSlice({
  name: 'robots',
  initialState: {
    value: [],
    status: null,
  },
  // reducers: {
  //   setRobots: (state, action) => {
  //     state.value = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchRobots.pending]: (state, action) => {
      return {
        ...state,
        status: 'loading',
      };
    },
    [fetchRobots.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: 'success',
        value: payload,
      };
    },
    [fetchRobots.rejected]: (state, action) => {
      return {
        ...state,
        status: 'failed',
      };
    },
  },
});

export const robotSliceActions = robotsSlice.actions;

export default robotsSlice.reducer;
