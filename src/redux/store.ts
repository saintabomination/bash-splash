import { configureStore } from '@reduxjs/toolkit';

import boardReducer from './slices/boardSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
