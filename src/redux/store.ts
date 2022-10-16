import { configureStore } from '@reduxjs/toolkit';

import boardReducer from './slices/boardSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
