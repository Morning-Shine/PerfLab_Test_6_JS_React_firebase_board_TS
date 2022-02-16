import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
    },
    removeUser(state) {
     state.name = null;
     state.id = null;
     state.avatar = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
