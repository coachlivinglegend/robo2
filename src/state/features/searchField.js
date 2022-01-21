import { createSlice } from '@reduxjs/toolkit'

export const searchFieldSlice = createSlice({
  name: 'searchField',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchField: (state, action) => {
      return {
        ...state,
        value: action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSearchField } = searchFieldSlice.actions

export default searchFieldSlice.reducer