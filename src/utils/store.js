import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice";
import emailSlice from "./emailSlice";
import otpSlice from "./otpSlice";

const store = configureStore({
  reducer: {
    email: emailSlice,
    otp: otpSlice,
    counter: counterSlice
  }
});

export default store;