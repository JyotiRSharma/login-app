import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    counterValue: 10,
  },
  reducers: {
    currentCounter: (state, action) => {
      state.counterValue = action.payload;
    },
    clearCounter: (state) => {
      state.counterValue = 10
    }
  },
});

export const { currentCounter, clearCounter } = counterSlice.actions;
export default counterSlice.reducer;
