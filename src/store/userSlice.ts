import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUser} from "../models/State";
import type { RootState } from "./store"

const initialState: IUser = {
  name: null,
  id: null,
  avatar: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: IUser, action: PayloadAction<IUser>) {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
    },
    removeUser(state: IUser) {
      state.name = null;
      state.id = null;
      state.avatar = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state;//с офсайта redux-toolkit

export default userSlice.reducer;
