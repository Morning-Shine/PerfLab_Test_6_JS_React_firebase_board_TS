import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITableView } from "../models/State";

const initialState: ITableView = {
  currentView: "table",
  //noActiveMode: "tile",
};

interface IPayloadTableView {
  //TODO заменить на ITableView во всем проекте (view-->currentView)
  view: string;
}

const tableView = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView(state: ITableView, action: PayloadAction<IPayloadTableView>) {
      state.currentView = action.payload.view;
      // state.noActiveMode = action.payload.noActiveMode;
    },
  },
});

export const { setView } = tableView.actions;

export default tableView.reducer;
