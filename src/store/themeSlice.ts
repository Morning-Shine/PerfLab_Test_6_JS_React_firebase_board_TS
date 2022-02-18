import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheme } from "../models/State";


const initialState: ITheme = {
  currentTheme: "dark", //light
  blockedBtn: "moon", //sun
};

interface IPayloadTheme {
  //TODO заменить на ITheme во всем проекте (theme-->currentTheme etc.)
  theme: string;
  themeBtnBlocked: string;
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state: ITheme, action: PayloadAction<IPayloadTheme>) {
      state.currentTheme = action.payload.theme;
      state.blockedBtn = action.payload.themeBtnBlocked;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
