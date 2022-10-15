import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { BoardType, TileType } from '../../typings/boardTypings';

interface InitialStateDefaultObject {
  tiles: BoardType;
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
    },
    toggleTileActive: (state, action: PayloadAction<TileType['position']>) => {
      state.tiles[action.payload.y][action.payload.x] = !state.tiles[action.payload.y][action.payload.x];
    },
  },
});

export const { generateBoardBase, toggleTileActive } = boardSlice.actions;
export default boardSlice.reducer;
