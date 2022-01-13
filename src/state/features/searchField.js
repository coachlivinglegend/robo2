import { createSlice } from '@reduxjs/toolkit'

export const searchFieldSlice = createSlice({
  name: 'searchField',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchField: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    }
    // ,
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchField } = searchFieldSlice.actions

export default searchFieldSlice.reducer