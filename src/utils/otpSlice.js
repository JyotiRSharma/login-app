import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
  name: "otpSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    }
  }
});

export const {addItem, clearItem} = otpSlice.actions;
export default otpSlice.reducer;