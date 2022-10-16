import { createSlice } from '@reduxjs/toolkit';

interface InitialStateDefaultObject {
  darkModeActive: boolean;
}

const INITIAL_STATE: InitialStateDefaultObject = {
  darkModeActive: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkModeActive = !state.darkModeActive;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
