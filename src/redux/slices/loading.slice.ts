import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  loadingStatus: false;
};

const initialState: StateType = {
  loadingStatus: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading(state: any, action: PayloadAction<any>) {
      state.loadingStatus = action.payload.loadingStatus;
    },
  },
});

export const actions = loadingSlice.actions;
export const reducer = loadingSlice.reducer;
