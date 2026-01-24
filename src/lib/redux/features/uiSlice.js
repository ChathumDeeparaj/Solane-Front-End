import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDashboardTab: "all",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    switchDashboardTab: (state, action) => {

      state.selectedDashboardTab = action.payload;
    },
  },
});

export const { switchDashboardTab } = uiSlice.actions;

export default uiSlice.reducer;