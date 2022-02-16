import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: "dark", //light
  blockedBtn: "moon", //sun
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.currentTheme = action.payload.theme;
      state.blockedBtn = action.payload.themeBtnBlocked;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
