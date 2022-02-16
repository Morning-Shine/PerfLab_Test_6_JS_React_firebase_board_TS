import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "table", 
  //noActiveMode: "tile", 
};

const tableView = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView(state, action) {
      state.currentView = action.payload.view;
     // state.noActiveMode = action.payload.noActiveMode;
    },
  },
});

export const { setView } = tableView.actions;

export default tableView.reducer;
