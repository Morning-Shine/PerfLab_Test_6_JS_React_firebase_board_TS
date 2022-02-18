import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFirebaseDataLoading } from "../models/State";
import type { RootState } from "./store";
import {
  fetchTickets,
  calcAllUncompletedTickets,
  calcUserUncompletedTickets,
  totalTickets,
} from "../async/fetchTickets";

interface IPayloadFirebaseData {
  high: number;
  normal: number;
  low: number;
  total: number;
  totalThisUser: number;
}
//TODO добавить обрабоку ошибок
const initialState: IFirebaseDataLoading = {
  tickets: [],
  status: null,
  error: null,
  calcAllUncompletedTickets: {
    high: 0,
    normal: 0,
    low: 0,
    status: null,
    error: null,
  },
  calcUserUncompletedTickets: {
    high: 0,
    normal: 0,
    low: 0,
    status: null,
    error: null,
  },
  totalTickets: { total: null, totalThisUser: null },
};
//TODO TS доделать
const firebaseDataLoading = createSlice({
  name: "firebaseDataLoading",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTickets.pending]: (state: IFirebaseDataLoading) => {
      state.status = "loading";
      state.error = null;
      /*TODO прелоадер*/
    },
    [fetchTickets.fulfilled]: (
      //TODO тип action? Поискать, д. не использоваться
      state: IFirebaseDataLoading,
      action
    ) => {
      state.status = "resolved";
      state.error = null;
      state.tickets = action.payload;
    },
    // [fetchTickets.rejected]: (state: IFirebaseDataLoading, action) => {
    //   //state.tickets = action.payload; добавить обр. ошибки
    // },
    [calcAllUncompletedTickets.pending]: (state: IFirebaseDataLoading) => {
      state.calcAllUncompletedTickets.status = "loading";
      state.calcAllUncompletedTickets.error = null;
    },
    [calcAllUncompletedTickets.fulfilled]: (
      state: IFirebaseDataLoading,
      action: PayloadAction<IPayloadFirebaseData>
    ) => {
      state.calcAllUncompletedTickets.status = "resolved";
      state.calcAllUncompletedTickets.error = null;
      state.calcAllUncompletedTickets.high = action.payload.high;
      state.calcAllUncompletedTickets.normal = action.payload.normal;
      state.calcAllUncompletedTickets.low = action.payload.low;
    },
    // [calcAllUncompletedTickets.rejected]: (state: IFirebaseDataLoading) => {
    //   //добавить обр. ошибки
    // },
    [calcUserUncompletedTickets.pending]: (state: IFirebaseDataLoading) => {
      state.calcUserUncompletedTickets.status = "loading";
      state.calcUserUncompletedTickets.error = null;
    },
    [calcUserUncompletedTickets.fulfilled]: (
      state: IFirebaseDataLoading,
      action: PayloadAction<IPayloadFirebaseData>
    ) => {
      state.calcUserUncompletedTickets.status = "resolved";
      state.calcUserUncompletedTickets.error = null;
      state.calcUserUncompletedTickets.high = action.payload.high;
      state.calcUserUncompletedTickets.normal = action.payload.normal;
      state.calcUserUncompletedTickets.low = action.payload.low;
    },
    // [calcUserUncompletedTickets.rejected]: (state: IFirebaseDataLoading) => {
    //   //добавить обр. ошибки
    // },
    [totalTickets.fulfilled]: (
      state: IFirebaseDataLoading,
      action: PayloadAction<IPayloadFirebaseData>
    ) => {
      state.totalTickets.total = action.payload.total;
      state.totalTickets.totalThisUser = action.payload.totalThisUser;
    },
  },
});

// export const { addDataToTable } = firebaseDataLoading.actions;
export const selectFirebaseData = (state: RootState) => state;
export default firebaseDataLoading.reducer;
