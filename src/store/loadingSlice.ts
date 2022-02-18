import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoading } from "../models/State";


const initialState: ILoading = {
  //TODO заменить на ILoading во всем проекте (loading-->isLoading)
  isLoading: false,
};

interface IPayloadLoading {
  loading: boolean;
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state: ILoading, action: PayloadAction<IPayloadLoading>) {
      state.isLoading = action.payload.loading;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
