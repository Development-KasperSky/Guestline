import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  gettingData: false,
  gotData: true,
  hotelData: {},
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    getData(state) {
      state.gettingData = true;
      state.gotData = false;
    },
    getDataSuccess(state, action) {
      state.gettingData = false;
      state.gotData = true;
      state.hotelData = action.payload;
    },
    getDataError(state) {
      state.gettingData = false;
      state.gotData = false;
      state.error = "Error";
    },
  },
});

export const actions = dataSlice.actions;
export const reducer = dataSlice.reducer;
