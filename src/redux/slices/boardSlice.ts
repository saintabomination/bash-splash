import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialStateDefaultObject {
  tiles: boolean[][];
}

const INITIAL_STATE: InitialStateDefaultObject = {
  tiles: [],
};

const boardSlice = createSlice({
  name: 'board',
  initialState: INITIAL_STATE,
  reducers: {
    generateBoardBase: (state, action: PayloadAction<{ width: number, height: number }>) => {
      state.tiles = new Array(action.payload.height).fill(new Array(action.payload.width).fill(false));
      console.log(state.tiles);
    },
  },
});

export const { generateBoardBase } = boardSlice.actions;
export default boardSlice.reducer;
