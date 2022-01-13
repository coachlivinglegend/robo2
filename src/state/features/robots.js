import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
);

// with async await
// export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   console.log(response)
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
      state.status = 'loading';
    },
    [fetchRobots.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.value = payload;
    },
    [fetchRobots.rejec]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setRobots } = robotsSlice.actions;

export default robotsSlice.reducer;
