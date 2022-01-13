import { configureStore } from '@reduxjs/toolkit';
import searchFieldReducer from './features/searchField';
import robotsReducer from './features/robots';
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    searchField: searchFieldReducer,
    robots: robotsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
