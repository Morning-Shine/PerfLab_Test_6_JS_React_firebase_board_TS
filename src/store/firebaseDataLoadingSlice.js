import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTickets,
  calcAllUncompletedTickets,
  calcUserUncompletedTickets,
  totalTickets,
} from "../async/fetchTickets";

//TODO добавить обрабоку ошибок
const initialState = {
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

const firebaseDataLoading = createSlice({
  name: "firebaseDataLoading",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTickets.pending]: state => {
      state.status = "loading";
      state.error = null;
      /*TODO прелоадер*/
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.tickets = action.payload;
    },
    [fetchTickets.rejected]: (state, action) => {
      //state.tickets = action.payload; добавить обр. ошибки
    },
    [calcAllUncompletedTickets.pending]: state => {
      state.calcAllUncompletedTickets.status = "loading";
      state.calcAllUncompletedTickets.error = null;
    },
    [calcAllUncompletedTickets.fulfilled]: (state, action) => {
      state.calcAllUncompletedTickets.status = "resolved";
      state.calcAllUncompletedTickets.error = null;
      state.calcAllUncompletedTickets.high = action.payload.high;
      state.calcAllUncompletedTickets.normal = action.payload.normal;
      state.calcAllUncompletedTickets.low = action.payload.low;
    },
    [calcAllUncompletedTickets.rejected]: state => {
      //добавить обр. ошибки
    },
    [calcUserUncompletedTickets.pending]: state => {
      state.calcUserUncompletedTickets.status = "loading";
      state.calcUserUncompletedTickets.error = null;
    },
    [calcUserUncompletedTickets.fulfilled]: (state, action) => {
      state.calcUserUncompletedTickets.status = "resolved";
      state.calcUserUncompletedTickets.error = null;
      state.calcUserUncompletedTickets.high = action.payload.high;
      state.calcUserUncompletedTickets.normal = action.payload.normal;
      state.calcUserUncompletedTickets.low = action.payload.low;
    },
    [calcUserUncompletedTickets.rejected]: state => {
      //добавить обр. ошибки
    },
    [totalTickets.fulfilled]: (state, action) => {
    state.totalTickets.total = action.payload.total;
    state.totalTickets.totalThisUser = action.payload.totalThisUser;
    }
  },
});

export const { addDataToTable } = firebaseDataLoading.actions;

export default firebaseDataLoading.reducer;
