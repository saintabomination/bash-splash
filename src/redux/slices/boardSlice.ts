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
    resetBoard: (state) => {
      state.tiles = state.tiles.map(row => row.map(column => column = false));
    },
  },
});

export const { generateBoardBase, toggleTileActive, resetBoard } = boardSlice.actions;
export default boardSlice.reducer;
